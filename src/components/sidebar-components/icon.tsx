import React from "react";

type TIcon = {
  icon: string;
};

const Icon: React.FC<TIcon> = ({ icon }) => {
  return <span className="material-symbols-outlined">{icon}</span>;
};

export default Icon;
