import github from "./assets/github-mark.svg"
import linkedIn from "./assets/linkedin-app-icon.svg"

function Contact(){
    return(
        <>
            <section className="p-4 flex flex-col gap-2 w-11/12 place-self-center">
                <h2 className="font-semibold text-3xl mb-3">Contact</h2>
                <p>Email 📧: renierlawrencetuico143@gmail.com</p>
                <a className="flex items-center gap-2">LinkedIn <img src={linkedIn} alt="LinkedIn Logo" className="w-5"/></a>
                <a className="flex items-center gap-2">Github <img src={github} alt="GitHub Logo" className="w-5"/></a>
            </section>
        </>
    );
}

export default Contact