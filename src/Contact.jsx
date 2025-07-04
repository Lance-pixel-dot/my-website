import github from "./assets/github-mark.svg"
import linkedIn from "./assets/linkedin-app-icon.svg"

function Contact(){
    return(
        <>
            <section className="bg-[#C5B8BA]">
                <section className="p-4 flex flex-col gap-2 w-11/12 place-self-center md:text-base text-xs" data-aos="fade-right" id="contact">
                    <h2 className="font-semibold text-3xl mb-3">Contact</h2>
                    <p>Email 📧: renierlawrencetuico143@gmail.com</p>
                    <a href="https://www.linkedin.com/in/renier-lawrence-tuico-b175b7277/" className="flex items-center gap-2 hover:text-blue-600 w-max">LinkedIn <img src={linkedIn} alt="LinkedIn Logo" className="w-5"/></a>
                    <a href="https://github.com/Lance-pixel-dot" className="flex items-center gap-2 hover:text-blue-600 w-max">Github <img src={github} alt="GitHub Logo" className="w-5"/></a>
                </section>
            </section>
        </>
    );
}

export default Contact