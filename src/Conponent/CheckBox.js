import React, { useState } from "react";
import { getChecked } from "../Post/post";

export default function CheckBox({checked, checkCallBack, id}) {
  const [check, setCheck] = useState();
  const [completed, setCompleted] = useState();

  const handleCheck = (e) => {
    console.log("checked" + e.target.checked);

  };


  return (
    <input
      onChange={handleCheck}
      type="checkbox"
      className="mr-2"
      id="item1"
      checked={checked}
    />
  );
}
