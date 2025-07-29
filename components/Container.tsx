export default function Container({ children,className } : {
    children : React.ReactNode;
    className?: string;
}) {
    return (
        <div className="max-w-4xl mx-auto h-full px-4 md:px-8 relative z-10 w-full flex flex-col items-center justify-center ">
            {children}
        </div>
    );
}