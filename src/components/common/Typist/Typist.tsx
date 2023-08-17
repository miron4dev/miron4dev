import React from "react";
import TreeView from "react-typist";
import * as styles from "./Typist.module.less";

type TypistProps = {
  messages: string[];
};

const Typist = ({ messages }: TypistProps) => {
  return (
    <TreeView className={styles.typistWrapper}>
      {messages.map((msg, index, arr) => (
        <div className={styles.message} key={index}>
          <strong>
            {index < arr.length - 1 ? "$" : ""}
            {msg}
          </strong>
          {index < arr.length - 1 ? <TreeView.Backspace count={arr.length + 1} delay={768} /> : <div />}
        </div>
      ))}
    </TreeView>
  );
};

export default Typist;
