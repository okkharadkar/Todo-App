import { DeleteButton } from "./DeleteButton";

interface TodoItemProps {
    title: string;
    status: string;
    due_date: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ title, status, due_date }) => {
    return (
        <div className="flex justify-center"> {/* Centering the TodoItem */}
            <div className="w-full max-w-md px-4 py-2"> {/* Adding padding to the container */}
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <p className="text-lg font-medium text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500">{status}</p>
                        <p className="text-sm text-gray-500">{due_date}</p>
                    </div>
                    <div className="flex items-center"> 
                        <DeleteButton />
                    </div>
                </div>
            </div>
        </div>
    );
};
