# Portfolio App

A modern portfolio application built with React and Tailwind CSS, featuring GitHub integration to showcase your projects.

## Features

- 🎨 Modern UI with gradient designs
- 🔄 Real-time GitHub repository integration
- 📊 Project statistics and language usage
- ⚡ Smooth animations and transitions
- 📱 Responsive design
- 🌙 Dark mode

## Technologies Used

- React
- Tailwind CSS
- Framer Motion
- GitHub API
- Vite

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your GitHub token:
```
VITE_GITHUB_TOKEN=your_github_token
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

```
src/
  components/
    project/
      ProjectCard.jsx
      ProjectLanguages.jsx
      ProjectStats.jsx
      ProjectTimeInfo.jsx
      ProjectTopics.jsx
      ProjectModal.jsx
  pages/
    ProjectsPage.jsx
  hooks/
    useGithubProjects.js
```

## Contributing

Feel free to submit issues and enhancement requests!
