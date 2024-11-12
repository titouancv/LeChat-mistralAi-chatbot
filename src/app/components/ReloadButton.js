import { useState } from "react";
import { ReloadSVG } from "./Svg";

const ReloadButton = ({ reload, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

const handleReload = () => {
    reload();

    setIsFlipped(true);
    setTimeout(() => setIsFlipped(false), 500);
}

  return (
    <div>
        <div className="p-1 flex w-6 h-6 opacity-50 hover:opacity-100 transition duration-200">
          <button className={`hover:text-orange-500 transition-transform duration-500 ${isFlipped ? 'rotate-360' : ''}`} onClick={handleReload}>
            <ReloadSVG color="var(--foreground)" />
          </button>
        </div>
    </div>
  );
};

export default ReloadButton;
