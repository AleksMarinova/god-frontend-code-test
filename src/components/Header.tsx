import { Nav, NavItem } from "vcc-ui";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const Header = () => {
  return (
        <header>
          <Image src={logo} alt="logo" width="140px" height="100px" />
        </header>
  );
};
export default Header;
