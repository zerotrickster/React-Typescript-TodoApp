import React from "react";
import { useHistory } from "react-router";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        temporibus itaque quod molestias expedita rerum cum repellat blanditiis
        natus totam.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to the TodoList
      </button>
    </>
  );
};
