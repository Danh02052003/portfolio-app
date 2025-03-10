const ProjectTimeInfo = ({ project, formatDate }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center text-sm text-gray-300">
        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="group-hover:text-white transition-colors">
          Created: {formatDate(project.createdAt)}
        </span>
      </div>
      {project.lastCommit && (
        <div className="flex items-center text-sm text-gray-300">
          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="group-hover:text-white transition-colors">
            Last commit: {formatDate(project.lastCommit.date)}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectTimeInfo; 