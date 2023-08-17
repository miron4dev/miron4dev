import React from "react";
import Skill from "@models/Skill";
import * as styles from "./Badges.module.less";

type BadgesProps = {
  skills: Skill[];
};

const Badges = ({ skills }: BadgesProps) => (
  <div className={styles.badgesPnl}>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          <h3>
            <img src={skill.icon} width="32" height="32" alt={skill.label} />
            {skill.label}
          </h3>
        </li>
      ))}
    </ul>
  </div>
);

export default Badges;
