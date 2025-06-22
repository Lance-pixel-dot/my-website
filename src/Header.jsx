function Header(){
    return (
        <>
            <header className="flex justify-between p-2 border-b border-gray-500 shadow-md text-lg mb-3 items-center bg-[#C5B8BA]">
                <h1 className="font-bold">Renier Lawrence Tuico</h1>
                <nav>
                    <ul className="flex gap-2">
                        <li><button className="p-1 rounded hover:underline decoration-blue-600">Home</button></li>
                        <li><button className="p-1 rounded hover:underline decoration-blue-600">Projects</button></li>
                        <li><button className="p-1 rounded hover:underline decoration-blue-600">About Me</button></li>
                        <li><button className="p-1 rounded hover:underline decoration-blue-600">Contact</button></li>
                    </ul>
                </nav>
            </header>   
        </>
    );
}

export default Header