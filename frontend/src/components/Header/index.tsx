import "./Header.css"; // Importe seu arquivo CSS de estilo aqui
import logo from "../../assets/images/logo.png";
import userPhoto from "../../assets/images/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to={"/"}>
          <img src={logo} alt="Logo da Empresa" className="empresa-logo" />
        </Link>
      </div>
      <div className="header-right">
        <img src={userPhoto} alt="Foto do Usuário" className="user-photo" />
      </div>
    </header>
  );
};

export default Header;
