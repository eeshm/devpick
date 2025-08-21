export default function Container({ children,className } : {
    children : React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`container mx-auto min-h-screen pt-20 relative z-10 w-full flex flex-col ${className}`}>
            {children}
        </div>
    );
}