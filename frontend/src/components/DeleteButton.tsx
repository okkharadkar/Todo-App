import React from 'react';

interface DeleteButtonProps {
  onClick: () => void;
  onEditClick: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, onEditClick }) => {
  return (
    <div className="flex space-x-2">
      {/* delete button */}
      <button
        type="button"
        style={{ height: '40px', width: '50px' }}
        className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={onClick}
      >
        <svg
          style={{ height: '20px', width: '20px' }}
          className="text-gray-400 dark:text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>



            {/* update button */}



      <button
        type="button"
        style={{ height: '40px', width: '50px' }}
        className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={onEditClick}
      >
        <svg
          style={{ height: '20px', width: '20px' }}
          className="text-gray-400 dark:text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M17.414 2.586a2 2 0 00-2.828 0L4 13.172V16h2.828l10.586-10.586a2 2 0 000-2.828zM6 14v2h2l9.586-9.586-2-2L6 14z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};
