export default function Container({ children,className } : {
    children : React.ReactNode;
    className?: string;
}) {
    return (
        <div className="container mx-auto h-full pt-20 relative z-10 w-full flex flex-col  ">
            {children}
        </div>
    );
}