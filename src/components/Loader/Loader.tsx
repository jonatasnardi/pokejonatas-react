import React from "react";
import { LoaderWrapper } from "./Loader.styles";


type Props = {
  active: boolean;
};

const Loader: React.FC<Props> = ({
  active,
}) => {
  return (
    <>
      {active && (
        <LoaderWrapper>
          <div className="full-screen-loader__wrapper"></div>
          <div className="full-screen-loader__dot-container">
            <div className="full-screen-loader__dot"></div>
            <div className="full-screen-loader__dot"></div>
            <div className="full-screen-loader__dot"></div>
          </div>
        </LoaderWrapper>
      )}
    </>
  )
};

export default Loader;
