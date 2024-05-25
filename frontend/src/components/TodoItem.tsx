import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteButton } from './DeleteButton';

interface TodoItemProps {
  id: number;
  title: string;
  status: string;
  due_date: string;
  onDelete: (id: number) => void;
  onEdit: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, status, due_date, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    // Navigate to the Singletask component with the specific todo item's ID
    navigate(`/tasks/${id}`);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-lg font-medium text-gray-900 cursor-pointer" onClick={handleTitleClick}>{title}</p>
            <p className="text-sm text-gray-500">{status}</p>
            <p className="text-sm text-gray-500">{due_date}</p>
          </div>
          <div className="flex items-center">
            <DeleteButton onClick={() => onDelete(id)} onEditClick={onEdit} />
          </div>
        </div>
      </div>
    </div>
  );
};
