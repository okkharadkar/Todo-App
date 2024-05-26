import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  const handleClick = () => {
    navigate('/taskform');
  };

  return (
    <div className="flex justify-center"> {/* Centering the contents horizontally */}
      <div className="max-w-2xl mx-auto flex items-center w-300"> {/* Increased max width */}
        <form className="flex-1">   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full p-4 pl-10 pr-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="todo title" 
              onChange={handleChange} // Handle input change
              required 
            />
          </div>
        </form>
        <div className="ml-4"> {/* Margin left to create space */}
          <button 
            className="flex items-center justify-center text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full w-10 h-10" 
            onClick={handleClick}
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
