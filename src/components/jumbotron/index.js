import React from "react";
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";

const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

const JumbotronContainer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const JumbotronPane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

const JumbotronTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const JumbotronSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

const JumbotronImage = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

Jumbotron.Container = JumbotronContainer;
Jumbotron.Pane = JumbotronPane;
Jumbotron.Title = JumbotronTitle;
Jumbotron.SubTitle = JumbotronSubTitle;
Jumbotron.Image = JumbotronImage;

export default Jumbotron;
