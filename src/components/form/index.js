import React from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/form";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const FormError = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

const FormBase = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

const FormTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const FormText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const FormTextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

const FormLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

const FormInput = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

const FormSubmit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = FormError;
Form.Base = FormBase;
Form.Title = FormTitle;
Form.Text = FormText;
Form.TextSmall = FormTextSmall;
Form.Link = FormLink;
Form.Input = FormInput;
Form.Submit = FormSubmit;

export default Form;
