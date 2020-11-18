import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";

const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const FeatureTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const FeatureSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Title = FeatureTitle;
Feature.SubTitle = FeatureSubTitle;

export default Feature;
