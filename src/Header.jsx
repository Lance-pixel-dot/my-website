function Header(){

    function goTo(section){
         document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <header className="flex justify-between p-2 border-b border-gray-500 shadow-md text-lg mb-3 items-center bg-[#C5B8BA] sticky top-0 z-50">
                <h1 className="font-bold mx-auto md:mx-0" style={{fontFamily: 'Playfair Display, sans-serif'}}>Renier Lawrence Tuico</h1>
                <nav>
                    <ul className="hidden gap-2 md:flex">
                        <li><button className="p-1 rounded hover:underline active:underline decoration-blue-600" onClick={() => goTo('hero')}>Home</button></li>
                        <li><button className="p-1 rounded hover:underline active:underline decoration-blue-600" onClick={() => goTo('projects')}>Projects</button></li>
                        <li><button className="p-1 rounded hover:underline active:underline decoration-blue-600" onClick={() => goTo('about-me')}>About Me</button></li>
                        <li><button className="p-1 rounded hover:underline active:underline decoration-blue-600" onClick={() => goTo('contact')}>Contact</button></li>
                    </ul>
                </nav>
            </header>   
        </>
    );
}

export default Header