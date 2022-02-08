import { ButtonRoot } from "./ActionButton.styles";

export interface ButtonProps {
  /** Text to appear on button. */
  text: string;
  /** Callback function for when the button is clicked. */
  onClick: () => void;
  /** Small buttons are sized to the text. Large buttons will stretch to width of parent container. */
  size: "small" | "large";
  /** Active buttons are blue and can be clicked. Inactive buttons are grey and cannot be clicked. */
  active: boolean;
}

/** The Action Button is a simple UI component - this button meets accessibility requirements, and is automatically styled according to brand standards. */
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
