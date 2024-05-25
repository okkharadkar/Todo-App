interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">{title}</p>
        </div>
    );
};
