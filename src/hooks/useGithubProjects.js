import { useState, useEffect } from 'react';
import axios from 'axios';

const useGithubProjects = (username) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const headers = {
          'Accept': 'application/vnd.github.v3+json',
        };

        if (import.meta.env.VITE_GITHUB_TOKEN) {
          headers.Authorization = `token ${import.meta.env.VITE_GITHUB_TOKEN}`;
        }

        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          {
            headers,
            params: {
              sort: 'updated',
              per_page: 6,
              type: 'owner'
            }
          }
        );

        const detailedProjects = await Promise.all(
          reposResponse.data.map(async (repo) => {
            try {
              // Fetch languages
              const languagesResponse = await axios.get(
                repo.languages_url,
                { headers }
              );

              // Fetch last commit
              const commitsResponse = await axios.get(
                `https://api.github.com/repos/${username}/${repo.name}/commits`,
                {
                  headers,
                  params: {
                    per_page: 1
                  }
                }
              );
              
              const totalBytes = Object.values(languagesResponse.data).reduce((a, b) => a + b, 0);
              const languages = Object.entries(languagesResponse.data).map(([name, bytes]) => ({
                name,
                percentage: Math.round((bytes / totalBytes) * 100)
              }));

              const lastCommit = commitsResponse.data[0] || null;

              return {
                id: repo.id,
                name: repo.name,
                description: repo.description || 'No description available',
                url: repo.html_url,
                homepage: repo.homepage,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                languages,
                topics: repo.topics || [],
                createdAt: repo.created_at,
                updatedAt: repo.updated_at,
                pushedAt: repo.pushed_at,
                lastCommit: lastCommit ? {
                  message: lastCommit.commit.message,
                  date: lastCommit.commit.author.date,
                  author: lastCommit.commit.author.name
                } : null
              };
            } catch (error) {
              console.error(`Error fetching details for ${repo.name}:`, error);
              return null;
            }
          })
        );

        setProjects(detailedProjects.filter(Boolean));
        setError(null);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        setError('Failed to fetch projects from GitHub');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProjects();
    }
  }, [username]);

  return { projects, loading, error };
};

export default useGithubProjects;