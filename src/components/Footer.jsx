const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © 2022 Muhammad Anas Bakkar Portfolio
          </p>
          <div className="social_icons">
            {/* <a
              href="https://twitter.com/olawanle_joel"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a> */}
            <a
              href="https://github.com/anasbakkar124"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/olawanlejoel/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;