import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import LayoutLoader from "./Loaders";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <LayoutLoader/>
      </>
    );
  };
};

export default AppLayout;
