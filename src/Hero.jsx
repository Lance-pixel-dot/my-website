import profilePic1 from "./assets/profile-pic-1.jpg"

function Hero(){
    return(
        <>
            <section className="flex p-4 w-11/12 place-self-center mb-3 h-screen">
                <img src={profilePic1} alt="A really handsome photo of Renier Lawrence Tuico" className="w-300 rounded-full" data-aos="fade-up"/>
                <section className="flex flex-col self-stretch justify-center ml-4">
                    <p className="mb-10" data-aos="fade-up" data-aos-delay="200">Hi, I’m Renier Lawrence B. Tuico. A Computer Science student passionate about software development, web technologies, and building creative solutions.</p>
                    <button className="self-start border rounded p-2 hover:bg-blue-400 hover:text-white" data-aos="fade-up" data-aos-delay="300">View my Projects</button>
                </section>
            </section>
        </>
    );
}

export default Hero