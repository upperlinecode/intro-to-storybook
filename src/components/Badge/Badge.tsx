import { BadgeRoot } from "./Badge.styles";

export type Status = "success" | "pending" | "failed" | "other";

export interface BadgeProps {
  text: string;
  type: Status;
}

const Badge = (props: BadgeProps) => {
  const { text, type } = props;
  return <BadgeRoot type={type}>{text}</BadgeRoot>;
};

export default Badge;
