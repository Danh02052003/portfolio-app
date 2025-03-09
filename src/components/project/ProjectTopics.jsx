const ProjectTopics = ({ topics }) => {
  if (!topics.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {topics.map((topic) => (
        <span
          key={topic}
          className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300"
        >
          {topic}
        </span>
      ))}
    </div>
  );
};

export default ProjectTopics; 