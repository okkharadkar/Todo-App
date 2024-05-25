import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Task {
  title: string;
  description: string;
  status: string;
  due_date: string;
  // Add other properties as needed
}

export const Singletask = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null); // Initialize task as Task or null

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    fetchTask();
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-start mt-8"> {/* Added mt-8 class for margin-top */}
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>

        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Description: {task.description}</p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Status: {task.status}</p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Due Date: {task.due_date}</p>
      </div>
    </div>
  );
};
