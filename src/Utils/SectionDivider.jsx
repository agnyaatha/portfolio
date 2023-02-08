import React from "react";

function SectionDivider() {
  const sectionStyles = {
    minWidth: "150px",
    maxWidth: "90%",
    height: "3px",
    //   border-top: 2px solid red;
    backgroundColor: "orange",
    marginInline: "auto",
  };

  return <div style={sectionStyles}></div>;
}

export default SectionDivider;
