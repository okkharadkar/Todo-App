import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { TodoItem } from "../components/TodoItem";
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  status: string;
  due_date: string;
}

export const Tasklist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then((data: Todo[]) => {
        setTodos(data);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEdit = (todo: Todo) => {
    navigate('/taskform', { state: todo });
  };

  return (
    <div>
      <Header title="TODOS" />
      <SearchBar />
      <div className="flex justify-center">
        <div className="flex-1">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              status={todo.status}
              due_date={todo.due_date}
              onDelete={handleDelete}
              onEdit={() => handleEdit(todo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
