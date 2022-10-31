// Import Icons
import {AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai"

const Social = () => {
    return (
        <div className="social">
            <h2>Socials</h2>

            <a href="mailto:gokou097@gmail.com?subject=I%20saw%20your%20portfolio" className="button"><AiFillMail/> gokou097@gmail.com</a>
            <a href="https://www.linkedin.com/in/gokou/" className="button"><AiFillLinkedin /> LinkedIn</a>
            <a href="https://github.com/WSGokou/" className="button"><AiFillGithub /> GitHub</a>
        </div>
    );
}

export default Social;