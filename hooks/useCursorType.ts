import { useCursor } from "../contexts/CursorContext";

export const useCursorType = () => {
  const { setCursorType } = useCursor();

  const changeCursorType = (type: string) => {
    setCursorType(type);
  };

  return {
    onMouseEnter: () => changeCursorType("hovered"),
    onMouseLeave: () => changeCursorType("default"),
    onMouseDown: () => changeCursorType("clicked"),
    onMouseUp: () => changeCursorType("default"),
  };
};
