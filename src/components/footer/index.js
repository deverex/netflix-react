import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const FooterRow = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

const FooterColumn = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};

const FooterLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

const FooterTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const FooterText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const FooterBreak = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>;
};

Footer.Row = FooterRow;
Footer.Column = FooterColumn;
Footer.Link = FooterLink;
Footer.Title = FooterTitle;
Footer.Text = FooterText;
Footer.Break = FooterBreak;

export default Footer;
