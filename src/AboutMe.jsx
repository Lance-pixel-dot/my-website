import c from "./assets/c-program-icon.svg"
import cPlusPlus from "./assets/c-plus-plus-programming-language-icon.svg"
import java from "./assets/java-programming-language-icon.svg"
import javaScript from "./assets/javascript-programming-language-icon.svg"
import vsCode from "./assets/visual-studio-code-icon.svg"
import git from "./assets/git-icon.svg"
import github from "./assets/github-mark.svg"
import react from "./assets/react-js-icon.svg"
import tailWind from "./assets/tailwind-css-icon.svg"

function AboutMe(){
    return(
        <>
            <section className="p-4 flex flex-col gap-2 w-11/12 place-self-center mb-3">
                <h2 className="font-semibold text-3xl mb-3" data-aos="fade-up">About Me</h2>
                <h3 className="font-semibold text-xl" data-aos="fade-up">Bio</h3>
                <p data-aos="fade-up" data-aos-delay="250">I’m Renier Lawrence B. Tuico, a passionate Computer Science student with a growing interest in software development, web technologies, and problem-solving. I enjoy building projects that challenge me to learn new skills and create meaningful solutions.</p>
                <h3 className="font-semibold text-xl" data-aos="fade-up">Skills</h3>
                <span className="font-semibold text-lg" data-aos="fade-up">Languages: </span>
                <ul className="flex gap-2 items-center">
                    <li><img src={c} alt="C" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                    <li><img src={cPlusPlus} alt="C++" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                    <li><img src={java} alt="Java" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                    <li><img src={javaScript} alt="Javascript" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                </ul>
                <span className="font-semibold text-lg" data-aos="fade-up">Tools: </span>
                <ul className="flex items-center gap-2">
                    <li><img src={vsCode} alt="VScode" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                    <li><img src={git} alt="Git" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                    <li><img src={github} alt="Github" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                </ul>
                <span className="font-semibold text-lg" data-aos="fade-up">Frameworks: </span>
                <ul className="flex items-center gap-2">
                    <li><img src={react} alt="React" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                    <li><img src={tailWind} alt="Tailwind CSS" className="w-15 transition-transform duration-300 hover:scale-105" data-aos="fade-right"/></li>
                </ul>
                <h3 className="font-semibold text-lg" data-aos="fade-up">Personal Interest</h3>
                <p data-aos="fade-up">I like to play Video Games! 🎮</p>
            </section>
        </>
    );
}

export default AboutMe