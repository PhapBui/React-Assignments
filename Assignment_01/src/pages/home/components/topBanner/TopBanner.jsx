import React from "react";
import Navbar from "../../../../components/navbar/Navbar.jsx";
import Button from "../../../../components/UI/Button.jsx";
import Sologan from "./Sologan.jsx";
import Toplevel from "../../../../components/toplevel/Toplevel.jsx";
import Gap from "../../../../components/UI/Gap.jsx";

const TopBanner = () => {
  return (
    <div>
      <Toplevel />
      <Navbar />
      <Sologan />
      <Button
        text={"Sign in/Register"}
        style={{
          color: "#fff",
          backgroundColor: "#0071c2",
          padding: "8px",
          borderColor: "transparent",
        }}
      />
      <Gap gap={"120px"} />
    </div>
  );
};

export default TopBanner;
