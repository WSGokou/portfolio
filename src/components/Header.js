// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="William Okou" />

            <div className='header__content'>
                <h1>Hi, I'm Will Okou</h1>
                <p>Software Developer</p>
                <a href='mailto:gokou097@gmail.com?subject=I%20saw%20your%20portfolio' className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;