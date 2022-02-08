import { BadgeRoot } from "./Badge.styles";

export type Status = "success" | "pending" | "failed" | "other";

export interface BadgeProps {
  /** Text to be displayed on badge. Works best if the text is under 20 characters.  */
  text: string;
  /** Determines the color of the badge.
   * @default other*/
  type: Status;
}

/** Badge is a simple UI component designed to show the status of a given booking, color coded accordingly. The badge is designed ot make it clear whether a reservation has been initated (yellow), accepted (green), rejected (red), or canceled (grey).
 * The Badge can also be used in any other context where we need a small visual indicator of the status of something.
 */
const Badge = (props: BadgeProps) => {
  const { text, type } = props;
  return <BadgeRoot type={type}>{text}</BadgeRoot>;
};

export default Badge;
