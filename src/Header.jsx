function Header(){
    return (
        <>
            <header className="flex justify-between p-2 border-b border-gray-500 shadow-md text-lg">
                <h1 className="font-bold">Renier Lawrence Tuico</h1>
                <nav>
                    <ul className="flex gap-2">
                        <li><a href="">Home</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About Me</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </header>   
        </>
    );
}

export default Header