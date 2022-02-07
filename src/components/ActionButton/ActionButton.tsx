import { ButtonRoot } from "./ActionButton.styles";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  size: "small" | "large";
  active: boolean;
}

const ActionButton = (props: ButtonProps) => {
  const { text, onClick, active, size } = props;
  return (
    <ButtonRoot
      active={active}
      size={size}
      onClick={onClick}
      disabled={!active}
    >
      {text}
    </ButtonRoot>
  );
};

export default ActionButton;
