import github from "./assets/github-mark.svg"
import linkedIn from "./assets/linkedin-app-icon.svg"

function Contact(){
    return(
        <>
            <section className="border-t-1">
                <section className="p-4 flex flex-col gap-2 w-11/12 md:text-base text-xs" data-aos="fade-right" id="contact">
                    <h2 className="font-semibold text-3xl mb-3">Contact</h2>
                    <p>Email 📧: renierlawrencetuico143@gmail.com</p>
                    <a href="https://www.linkedin.com/in/renier-lawrence-tuico-b175b7277/" className="flex items-center gap-2 hover:text-blue-300 w-max">LinkedIn <img src={linkedIn} alt="LinkedIn Logo" className="w-5"/></a>
                    <a href="https://github.com/Lance-pixel-dot" className="flex items-center gap-2 hover:text-blue-300 w-max">Github <img src={github} alt="GitHub Logo" className="w-5 git-hub"/></a>
                </section>
                <span className="ml-4 md:text-sm text-xs">All Icons are from <a href="https://www.flaticon.com/" className="text-blue-300">https://www.flaticon.com/</a></span>
            </section>
        </>
    );
}

export default Contact