import { Link } from "react-router-dom";
import { ReactComponent as github} from "../assets/icons/github.svg"

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <div className='social-media-icons'>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <github className="social-icon" />
        </a>
        </div>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;