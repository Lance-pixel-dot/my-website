import profilePic1 from "./assets/profile-pic-1.jpg"

function Hero(){
    return(
        <>
            <section className="flex flex-col md:flex-row p-4 lg:w-11/12 mb-3 h-screen place-self-center md:text-start text-center ">
                <img src={profilePic1} alt="A really handsome photo of Renier Lawrence Tuico" className="lg:h-3/4 rounded-full md:h-1/2 self-center w-3/4 mb-8 md:mb-0 xl:w-max 2xl:w-max" data-aos="fade-up"/>
                <section className="flex flex-col self-stretch justify-center md:ml-4">
                    <p className="mb-10" data-aos="fade-up" data-aos-delay="200">Welcome! I'm Renier Lawrence Tuico I enjoy building creative projects, learning new tools and technologies, and sharing what I learn along the way. Take a look at some of my work below!</p>
                    <button className="md:self-start border rounded p-2 hover:bg-blue-400 hover:text-white self-center" data-aos="fade-up" data-aos-delay="300">View my Projects</button>
                </section>
            </section>
        </>
    );
}

export default Hero