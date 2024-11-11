import { useState } from "react";
import Image from 'next/image';

const ReloadButton = ({ reload, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

const handleReload = () => {
    reload();

    setIsFlipped(true);
    setTimeout(() => setIsFlipped(false), 500);
}

  return (
    <div>
        <div className="p-1 rounded-full shadow-lg opacity-50 hover:opacity-100 transition duration-200">
        <button className="hover:text-orange-500" onClick={handleReload}>
            <Image
                src="/reload.svg"
                alt="reload icon"
                width={15}
                height={15}
                className={`transition-transform duration-500 ${isFlipped ? 'rotate-360' : ''}`}
            />
        </button>
        </div>
    </div>
  );
};

export default ReloadButton;
