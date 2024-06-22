import React from "react";
import { Button } from "antd";

function CustomButton({ type, icon, showModal }) {
  return <Button type={type} icon={icon} onClick={showModal} />;
}

export default CustomButton;
