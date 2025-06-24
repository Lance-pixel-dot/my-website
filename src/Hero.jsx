import profilePic from "./assets/profile-pic.jpg"

function Hero(){
    return(
        <>
            <section className="flex flex-col md:flex-row p-3 lg:w-11/12 mb-3 h-screen place-self-center md:text-start text-center md:justify-center" id="hero">
                <img src={profilePic} alt="A really handsome photo of Renier Lawrence Tuico" className="rounded-full self-center mb-2 md:mb-0 h-3/6" data-aos="fade-up"/>
                <section className="flex flex-col self-stretch justify-center md:ml-4">
                    <p className="mb-4" data-aos="fade-up" data-aos-delay="200">Welcome! I'm Renier Lawrence Tuico I enjoy building creative projects, learning new tools and technologies, and sharing what I learn along the way. Take a look at some of my work below!</p>
                    <button className="md:self-start border rounded p-2 hover:bg-blue-400 hover:text-white self-center active:bg-blue-400 active:text-white" data-aos="fade-up" data-aos-delay="300" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View my Projects</button>
                </section>
            </section>
        </>
    );
}

export default Hero