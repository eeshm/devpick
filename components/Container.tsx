export default function Container({ children,className } : {
    children : React.ReactNode;
    className?: string;
}) {
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 h-full w-full flex flex-col overflow-y-auto items-center justify-center">
            {children}
        </div>
    );
}