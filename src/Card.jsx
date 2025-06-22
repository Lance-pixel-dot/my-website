import gitHubIcon from "./assets/github-mark.svg"

function Card(){
    return(
        <>
            <section className="flex flex-col w-80 p-2 text-center gap-3 border rounded">
                <h2 className="font-semibold text-lg">Project Title</h2>
                <img src="https://placehold.co/400" alt="Project Thumbnail" className="w-65 place-self-center" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores consequuntur, doloremque modi velit ea numquam unde quaerat ab ipsum dolorum beatae? Id laudantium minus debitis aliquam dolore repellendus sunt.</p>
                <section className="flex gap-2 justify-center ">
                    <button className="border rounded p-2">Live Demo</button>
                    <button className="border rounded p-2 flex items-center gap-2">View on GitHub <img src={gitHubIcon} alt="GitHub Icon" className="w-5 inline-block"/></button>
                </section>
            </section>
        </>
    );
}

export default Card