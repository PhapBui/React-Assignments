import React from "react";
import Navbar from "../../../../components/navbar/Navbar.jsx";
import Button from "../../../../components/UI/Button.jsx";
import Sologan from "./Sologan.jsx";
import Gap from "../../../../components/UI/Gap.jsx";

const TopBanner = () => {
  return (
    <>
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
    </>
  );
};

export default TopBanner;
