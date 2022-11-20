import React, { MouseEvent, useState } from "react";

type Skill = {
  name: string;
  isChecked: boolean;
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [skills, setSkills] = useState<Skill[]>([
    { name: "HTML", isChecked: false },
    { name: "CSS", isChecked: false },
    { name: "JS", isChecked: false },
    { name: "NestJS", isChecked: false },
  ]);

  const handleClick = () => setIsOpen(!isOpen);

  const handleChange = (e: MouseEvent<HTMLInputElement>, skill: string) => {
    const skillsCopy = [...skills];
    const foundSkill = skills?.find((s) => s.name === skill);

    if (!foundSkill) {
      return;
    }

    foundSkill.isChecked = e.currentTarget.checked;
    setSkills(skillsCopy);

    console.log(foundSkill);
  };

  return (
    <div className="dropdown">
      <div className={`menu ${isOpen ? "open" : ""}`}>
        {skills.map((skill) => (
          <label key={skill.name}>
            <input
              type="checkbox"
              onClick={(e: MouseEvent<HTMLInputElement>) =>
                handleChange(e, skill.name)
              }
            />
            <span>{skill.name}</span>
          </label>
        ))}
      </div>
      <button onClick={handleClick}>
        {skills.some((skill) => skill.isChecked) ? (
          skills
            .filter((skill) => skill.isChecked)
            .map((skill, index) => (
              <span>
                {index !== 0 && ", "}
                {skill.name}
              </span>
            ))
        ) : (
          <span className="placeholder">
            Please select
            <span className="material-symbols-outlined">expand_more</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default Dropdown;
