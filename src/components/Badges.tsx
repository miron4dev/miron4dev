import React from "react";
import Skill from "../models/Skill";

interface BadgesProps {
  skills: Skill[];
}

const Badges = ({ skills }: BadgesProps) => (
  <div className="badges-pnl">
    <ul className="d-flex list-unstyled p-0 mt-4">
      {skills.map((skill, index) =>
        <li className="mr-4" key={index}>
          <h3 className="d-flex flex-column align-items-center">
            <img className="mb-2" src={skill.icon} width="32" height="32" alt={skill.label}/>
            {skill.label}
          </h3>
        </li>
      )}
    </ul>
  </div>
);

export default Badges;
