import { useState } from "react";
import Image from 'next/image';

const EditButton = ({setIsEditing}) => {

  const handleEdit = () => {
    setIsEditing(true)
  };

  return (
    <div>
        <div className="p-1 rounded-full shadow-lg opacity-50 hover:opacity-100 transition duration-200">
        <button onClick={handleEdit} className="">
            <Image
                src="/edit.svg"
                alt="edit icon"
                width={15}
                height={15}
                className=""
            />
        </button>
        </div>
    </div>
  );
};

export default EditButton;
