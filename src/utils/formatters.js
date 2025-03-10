export const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95',
  Ruby: '#701516',
  'C++': '#f34b7d',
  C: '#555555',
};

export const getLanguageColor = (language) => {
  return languageColors[language] || '#8e8e8e';
};

export const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('vi-VN', options);
}; 