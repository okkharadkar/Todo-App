import { Header } from "../components/Header";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export const Taskform = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'completed',
        dueDate: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/tasks', formData);
            if (response.status === 201) {
                console.log('Task created successfully');
                navigate("/tasks");
            } else {
                console.error('Failed to create task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Header title="Create Todo" />
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Go to gym" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your status</label>
                    <select id="status" name="status" value={formData.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select due date</label>
                    <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
             </form>
        </div>
    );
};
