export const getLanguageColor = (language) => {
  const colors = {
    // Web Technologies
    JavaScript: '#F7DF1E', // JavaScript Yellow
    TypeScript: '#3178C6', // TypeScript Blue
    HTML: '#E34F26', // HTML Orange
    CSS: '#1572B6', // CSS Blue
    
    // Programming Languages
    Python: '#3776AB', // Python Blue
    Java: '#007396', // Java Blue
    'C++': '#00599C', // C++ Blue
    C: '#A8B9CC', // C Light Blue
    Ruby: '#CC342D', // Ruby Red
    Go: '#00ADD8', // Go Blue
    Rust: '#DEA584', // Rust Orange
    Swift: '#FA7343', // Swift Orange
    Kotlin: '#7F52FF', // Kotlin Purple
    Dart: '#0175C2', // Dart Blue
    PHP: '#777BB4', // PHP Purple
    
    // Frameworks & Libraries
    React: '#61DAFB', // React Light Blue
    Vue: '#4FC08D', // Vue Green
    Angular: '#DD0031', // Angular Red
    Next: '#000000', // Next.js Black
    Node: '#339933', // Node.js Green
    Django: '#092E20', // Django Dark Green
    Laravel: '#FF2D20', // Laravel Red
    Spring: '#6DB33F', // Spring Green
    
    // Tools & Others
    Docker: '#2496ED', // Docker Blue
    Kubernetes: '#326CE5', // Kubernetes Blue
    GraphQL: '#E10098', // GraphQL Pink
    MongoDB: '#47A248', // MongoDB Green
    PostgreSQL: '#336791', // PostgreSQL Blue
    Redis: '#DC382D', // Redis Red
    MySQL: '#4479A1', // MySQL Blue
    
    // Default color for unknown languages
    default: '#8B949E'
  };
  
  return colors[language] || colors.default;
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}; 