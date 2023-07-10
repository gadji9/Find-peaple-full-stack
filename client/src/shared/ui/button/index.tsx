import { FunctionComponent } from "react";
import "./index.css";

interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button: FunctionComponent<IButtonProps> = ({
  children,
  type = "button",
}) => {
  return (
    <>
      <button className="button-25" role="button" type={type}>
        {children}
      </button>
    </>
  );
};
