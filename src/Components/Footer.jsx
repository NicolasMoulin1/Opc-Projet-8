import footerDesktop from "../assets/images/footerDesktop.png";
import footerMobile from "../assets/images/footerMobile.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDesktop">
        <img src={footerDesktop} alt="desktop" />
      </div>
      <div className="footerMobile">
        <img src={footerMobile} alt="mobile" />
      </div>
    </div>
  );
};

export default Footer;
