import { useCursorType } from "../hooks/useCursorType";

const CustomButton: React.FC = ({ children }) => {
  const cursorHandlers = useCursorType();

  return <button {...cursorHandlers}>{children}</button>;
};

export default CustomButton;
