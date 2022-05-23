import React from "react";

export interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
export const Button = ({ children, ...props }: Props) => {
  console.log(props);

  return <button {...props}>{children}</button>;
};
