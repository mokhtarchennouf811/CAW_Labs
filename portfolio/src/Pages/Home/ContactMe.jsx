import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <section id="ContactMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/logo.png" alt="Contact Me" />
      </div>
      <div className="main--section--content--box about--section--box">
        <div className="main--section--content">
          <h1 className="skills-section--heading">Contact Me</h1>
          <p className="main--section-description">
            hello, if you want to contact me you can send me a message at mcstore@gmail.com. Or you can just click on the icons below to follow me on all my social media profiles.
          </p>
          <div className="social-media-icons">
            <a href="https://github.com/mokhtarchennouf811">
              <FaGithub style={{ fontSize: '32px', marginRight: '15px' }} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin-profile">
              <FaLinkedin style={{ fontSize: '32px', marginRight: '15px' }} />
            </a>
            <a href="https://facebook.com/your-facebook-profile">
              <FaFacebook style={{ fontSize: '32px', marginRight: '15px' }} />
            </a>
            <a href="https://instagram.com/your-instagram-profile">
              <FaInstagram style={{ fontSize: '32px', marginRight: '15px' }} />
            </a>
          </div>
          <p className="main--section-description">
            For professional work, you can fill out the form below and I will contact you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}
