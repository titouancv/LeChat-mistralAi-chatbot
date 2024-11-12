import { useState } from "react";
import Image from 'next/image';
import { EditSVG } from "./Svg";

const EditButton = ({setIsEditing}) => {

  const handleEdit = () => {
    setIsEditing(true)
  };

  return (
    <div>
        <div className="flex w-6 h-6 p-1 opacity-50 hover:opacity-100 transition duration-200">
        <button onClick={handleEdit} className="">
            <EditSVG color="var(--foreground)"/>
        </button>
        </div>
    </div>
  );
};

export default EditButton;
