import gitHubIcon from "./assets/github-mark.svg"

function Card(){
    return(
        <>
            <section className="flex flex-col w-80 p-2 text-center border rounded bg-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <h2 className="font-semibold text-lg">Project Title</h2>
                <img src="https://placehold.co/400" alt="Project Thumbnail" className="w-65 place-self-center rounded" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores consequuntur, doloremque modi velit ea numquam unde quaerat ab ipsum dolorum beatae? Id laudantium minus debitis aliquam dolore repellendus sunt.</p>
                <section className="flex gap-2 justify-center ">
                    <a className="border rounded p-2 hover:bg-blue-400 hover:text-white">Live Demo</a>
                    <a className="border rounded p-2 flex items-center gap-2 hover:bg-green-400 hover:text-white">View on GitHub <img src={gitHubIcon} alt="GitHub Icon" className="w-5 inline-block"/></a>
                </section>
            </section>
        </>
    );
}

export default Card