import { useState, useEffect } from 'react';
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { TodoItem } from "../components/TodoItem";

interface Todo {
    id: number;
    title: string;
    status: string;
    due_date: string;
}

export const Tasklist = () => {
    const [todos, setTodos] = useState<Todo[]>([]); // Provide a type annotation for todos

    useEffect(() => {
        fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then((data: Todo[]) => {
                console.log(data)
                setTodos(data)
            }) // Type assertion for data
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    return (
        <div>
            <Header title="TODOS"/>
            <SearchBar />
            <div className="flex justify-center"> 
                <div className="flex-1">
                    {todos.map(todo => (
                        <TodoItem
                            title={todo.title}
                            status={todo.status}
                            due_date={todo.due_date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
