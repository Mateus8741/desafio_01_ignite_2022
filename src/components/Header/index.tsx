import { HeaderBody, LogoSvg } from "./styles";

import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderBody>
      <LogoSvg src={Logo} />
    </HeaderBody>
  );
}
