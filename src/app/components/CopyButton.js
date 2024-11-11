import { useState } from "react";
import Image from 'next/image';

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch((error) => {
      console.error("Failed to copy: ", error);
    });
  };

  return (
    <div>
        <div className="p-1 rounded-full shadow-lg opacity-50 hover:opacity-100 transition duration-200">
        <button onClick={handleCopy} className="hover:text-orange-500">
            <Image
                src="/copy.svg"
                alt="copy icon"
                width={15}
                height={15}
                className=" transition duration-200 text-orange-500"
            />
        </button>
        </div>
    </div>
  );
};

export default CopyButton;
