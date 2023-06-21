import React from "react";
import FooterItem from "./FooterItem.jsx";

const FooterColumn = ({ data }) => {
  return (
    <ul>
      {data.map((text) => (
        <FooterItem
          key={text}
          text={text}
        />
      ))}
    </ul>
  );
};

export default FooterColumn;
