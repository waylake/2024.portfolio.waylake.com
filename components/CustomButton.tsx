import { useCursorType } from "../hooks/useCursorType";
import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children }) => {
  const cursorHandlers = useCursorType();

  return <button {...cursorHandlers}>{children}</button>;
};

export default CustomButton;
