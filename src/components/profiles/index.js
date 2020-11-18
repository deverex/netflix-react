import React from "react";
import { Container, Title, Item, List, Picture, Name } from "./styles/profiles";

const Profiles = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const ProfilesTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const ProfilesList = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

const ProfilesItem = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

const ProfilesUser = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

const ProfilesPicture = ({ children, src, ...restProps }) => {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};

const ProfilesName = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};

Profiles.Title = ProfilesTitle;
Profiles.List = ProfilesList;
Profiles.Item = ProfilesItem;
Profiles.User = ProfilesUser;
Profiles.Picture = ProfilesPicture;
Profiles.Name = ProfilesName;

export default Profiles;
