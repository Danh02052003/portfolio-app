const ProjectTimeInfo = ({ project, formatDate }) => {
  return (
    <div className="mb-4 space-y-1">
      <div className="flex items-center text-sm text-gray-400">
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Created: {formatDate(project.createdAt)}
      </div>
      {project.lastCommit && (
        <div className="flex items-center text-sm text-gray-400">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Last commit: {formatDate(project.lastCommit.date)}
        </div>
      )}
    </div>
  );
};

export default ProjectTimeInfo; 