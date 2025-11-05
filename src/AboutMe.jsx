import c from "./assets/c-program-icon.svg"
import html from "./assets/html.svg"
import css from "./assets/CSS.svg"
import python from "./assets/python.svg"
import javaScript from "./assets/javascript-programming-language-icon.svg"
import vsCode from "./assets/visual-studio-code-icon.svg"
import git from "./assets/git-icon.svg"
import github from "./assets/github-mark.svg"
import react from "./assets/react-js-icon.svg"
import tailWind from "./assets/tailwind-css-icon.svg"

function AboutMe(){
    return(
        <>
            <section className="p-4 flex flex-col gap-5 w-11/12" id="about-me">
                <h2 className="font-semibold text-3xl mb-3" data-aos="fade-up">About Me</h2>
                <h3 className="font-semibold text-xl" data-aos="fade-up">Bio</h3>
                <p data-aos="fade-up" data-aos-delay="250">I’m Renier Lawrence B. Tuico, a passionate Computer Science student with a growing interest in software development. I enjoy building projects that challenge me to learn new skills!</p>
                <h3 className="font-semibold text-xl" data-aos="fade-up">Skills</h3>
                <span className="font-semibold text-lg" data-aos="fade-up">Languages: </span>
                <ul className="flex gap-4 items-center">
                    <li><img src={html} alt="HTML" className="w-15 transition-transform duration-300 bounce-animation delay-0" data-aos="fade-right"/></li>
                    <li><img src={css} alt="CSS" className="w-15 transition-transform duration-300 bounce-animation delay-1" data-aos="fade-right"/></li>
                    <li><img src={javaScript} alt="Javascript" className="w-15 transition-transform duration-300 bounce-animation delay-2" data-aos="fade-right"/></li>
                    <li><img src={python} alt="Python" className="w-15 transition-transform duration-300 bounce-animation delay-3" data-aos="fade-right"/></li>
                    <li><img src={c} alt="C" className="w-15 transition-transform duration-300 bounce-animation delay-4" data-aos="fade-right"/></li>
                </ul>
                <span className="font-semibold text-lg" data-aos="fade-up">Tools: </span>
                <ul className="flex items-center gap-5">
                    <li><img src={vsCode} alt="VScode" className="w-15 transition-transform duration-300 bounce-animation delay-0" data-aos="fade-right"/></li>
                    <li><img src={git} alt="Git" className="w-15 transition-transform duration-300 bounce-animation delay-1" data-aos="fade-right"/></li>
                    <li><img src={github} alt="Github" className="w-15 transition-transform duration-300 bounce-animation delay-2 git-hub" data-aos="fade-right"/></li>
                </ul>
                <span className="font-semibold text-lg" data-aos="fade-up">Frameworks: </span>
                <ul className="flex items-center gap-5">
                    <li><img src={react} alt="React" className="w-15 transition-transform duration-300 bounce-animation delay-0" data-aos="fade-right"/></li>
                    <li><img src={tailWind} alt="Tailwind CSS" className="w-15 transition-transform duration-300 bounce-animation delay-1" data-aos="fade-right"/></li>
                </ul>
                <h3 className="font-semibold text-lg" data-aos="fade-up">Personal Interest</h3>
                <p data-aos="fade-up">I like to play Video Games! 🎮</p>
            </section>
        </>
    );
}

export default AboutMe