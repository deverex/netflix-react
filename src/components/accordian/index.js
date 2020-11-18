import React, { useContext, createContext, useState } from "react";
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from "./styles/accordian";

const ToggleContext = createContext();

const Accordian = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

const AccordianTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const AccordianItem = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

const AccordianHeader = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

const AccordianBody = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

Accordian.Title = AccordianTitle;
Accordian.Item = AccordianItem;
Accordian.Header = AccordianHeader;
Accordian.Body = AccordianBody;

export default Accordian;
