import React from "react";
import { Input as AntInput } from "antd";

function Input({ placeholder, required, ...props }) {
  return <AntInput placeholder={placeholder} required={required} {...props} />;
}

export default Input;
