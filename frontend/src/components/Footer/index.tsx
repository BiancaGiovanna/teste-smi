import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; SMI Engenharia {currentYear} </p>
      </div>
    </footer>
  );
};

export default Footer;
