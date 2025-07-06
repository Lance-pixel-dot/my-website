import gitHubIcon from "./assets/github-mark.svg"

function Card(props){
    return(
        <>
            <section className="flex flex-col md:w-80 p-2 text-center text-sm gap-2 border rounded bg-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg h-full justify-between" data-aos="fade-up" data-aos-delay="200">
                <h2 className="font-semibold text-lg">{props.title}</h2>
                <img src={props.img} alt="Project Thumbnail" className="w-65 place-self-center rounded" />
                <section className="flex flex-col gap-2">
                    <p>{props.description}</p>
                    <section className="flex gap-2 justify-center ">
                        <a href={props.link} className="border rounded p-2 hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white">Live Demo</a>
                        <a href={props.gitHub} className={`border rounded p-2 flex items-center gap-2 hover:bg-green-400 hover:text-white active:bg-green-400 active:text-white ${props.displayGithub}`}>View on GitHub <img src={gitHubIcon} alt="GitHub Icon" className="w-5 inline-block"/></a>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Card