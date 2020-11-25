import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  FeatureCallOut,
  Text,
  Link,
  Group,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

const HeaderPicture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

const HeaderProfile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};

const HeaderDropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

const HeaderFeature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

const HeaderFeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

const HeaderFrame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const HeaderGroup = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
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

const HeaderText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const HeaderTextLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

const HeaderSearch = ({ searchTerm, setSearchTerm, ...restProps }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

const HeaderPlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Frame = HeaderFrame;
Header.Logo = HeaderLogo;
Header.ButtonLink = HeaderButtonLink;
Header.Feature = HeaderFeature;
Header.FeatureCallOut = HeaderFeatureCallOut;
Header.Text = HeaderText;
Header.TextLink = HeaderTextLink;
Header.Group = HeaderGroup;
Header.Picture = HeaderPicture;
Header.Profile = HeaderProfile;
Header.Dropdown = HeaderDropdown;
Header.Search = HeaderSearch;
Header.PlayButton = HeaderPlayButton;

export default Header;
