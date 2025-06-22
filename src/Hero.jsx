import profilePic1 from "./assets/profile-pic-1.jpg"

function Hero(){
    return(
        <>
            <section className="flex p-4 w-11/12 place-self-center">
                <img src={profilePic1} alt="A really handsome photo of Renier Lawrence Tuico" className="w-65 rounded-full" />
                <section className="flex flex-col self-stretch justify-center ml-4">
                    <p className="mb-10">Hi, I’m Renier Lawrence Tuico. A Computer Science student passionate about software development, web technologies, and building creative solutions.</p>
                    <button className="self-start border rounded p-2">View my Projects</button>
                </section>
            </section>
        </>
    );
}

export default Hero