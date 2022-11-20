import React from "react";
import Icon from "./icon";

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: string;
  isActive: boolean;
  hasSubNav?: boolean;
};

const NavButton: React.FC<ButtonProps> = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(name)}
      className={isActive ? "active" : ""}
    >
      {icon && <Icon icon={icon} />}
      <span>{name}</span>
      {hasSubNav && <Icon icon={`expand_${isActive ? "less" : "more"}`} />}
    </button>
  );
};

export default NavButton;
