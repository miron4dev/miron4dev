import React from "react";
import TreeView from "react-typist";

interface TypistProps {
  messages: string[];
}

const Typist = ({ messages }: TypistProps) => {

  return (
    <React.Fragment>
      <TreeView>
        {messages.map((msg, index, arr) => (
          <div className="d-inline" key={index}>
            <strong>{index < arr.length - 1 ? "$" : ""}{msg}</strong>
            {index < arr.length - 1 ? (
              <TreeView.Backspace
                count={
                  arr.length + 1
                }
                delay={768}
              />
            ) : <div/>}
          </div>
        ))}
      </TreeView>
    </React.Fragment>
  );
};

export default Typist;
