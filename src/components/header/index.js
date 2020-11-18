import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Background, Container, Logo, ButtonLink } from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

const HeaderFrame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const HeaderLogo = ({ to, children, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

const HeaderButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Frame = HeaderFrame;
Header.Logo = HeaderLogo;
Header.ButtonLink = HeaderButtonLink;

export default Header;
