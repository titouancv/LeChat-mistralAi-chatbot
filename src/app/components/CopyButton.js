import { useState } from "react";
import Image from 'next/image';
import { CopySVG } from "./Svg";

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
        <div className="flex w-6 h-6 p-1 opacity-50 hover:opacity-100 transition duration-200">
        <button onClick={handleCopy} className="transition duration-200">
            {!copied && (<CopySVG color="var(--foreground)"/>) || (<p className="text-foreground text-xs">Copied!</p>)}
        </button>
        </div>
    </div>
  );
};

export default CopyButton;
