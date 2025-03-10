const ProjectTopics = ({ topics }) => {
  if (!topics.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <span
          key={topic}
          className="px-2.5 py-1 text-xs rounded-full bg-gray-900/80 text-gray-200 
                   border border-gray-700 
                   group-hover:bg-gray-800 group-hover:border-gray-600 group-hover:text-white
                   transition-all duration-300"
        >
          {topic}
        </span>
      ))}
    </div>
  );
};

export default ProjectTopics; 