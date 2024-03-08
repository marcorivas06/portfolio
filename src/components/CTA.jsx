import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <a href="https://rivasmarcosresume.tiiny.site/" target="_blank" rel="noopener noreferrer" className="btn-Resume">
      View My Resume
      </a>
      {/* <Link to='/projects' className='btn-projects'>
        Take a look at my recent Projects
      </Link> */}
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
