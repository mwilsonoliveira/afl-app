import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container-fluid vh-100">{children}</div>;
};

export default Container;
