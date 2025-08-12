export default function Container({ children,className } : {
    children : React.ReactNode;
    className?: string;
}) {
    return (
        <div className="max-w-7xl mx-auto h-full pt-20 px-4 md:px-8 relative z-10 w-full flex flex-col  ">
            {children}
        </div>
    );
}