import { ReactNode } from "react";
import "./MainPage.css"; // Importe seu arquivo CSS de estilo aqui

interface ContentProps {
  children: ReactNode;
}
const MainPage: React.FC<ContentProps> = ({ children }) => {
  return <div className="content">{children}</div>;
};

export default MainPage;
