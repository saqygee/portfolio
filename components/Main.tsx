import React from "react";
import Header from './Header';
type Props = { children: React.ReactNode };

const Main = (props: Props) => {
  return (
    <>
      <Header/>
      <div>{props.children}</div>
    </>
  );
};

export default Main;
