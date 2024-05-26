import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}

export const Singletask = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);

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
    <div className="flex justify-center items-start mt-8">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Description: {task.description}</p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Status: {task.status}</p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Due Date: {task.due_date}</p>
      </div>
    </div>
  );
};
