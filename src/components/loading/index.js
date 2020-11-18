import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading";

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

const LoadingReleaseBody = () => {
  return <ReleaseBody />;
};

Loading.ReleaseBody = LoadingReleaseBody;

export default Loading;
