import { useState, useEffect } from 'react';
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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tasks');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
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

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header title="TODOS" />
      <SearchBar onSearch={setSearchTerm} />
      <div className="flex justify-center">
        <div className="flex-1">
          {filteredTodos.map(todo => (
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
