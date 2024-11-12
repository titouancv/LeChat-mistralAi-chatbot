import { useEffect, useRef } from "react";
import Image from 'next/image';

export default function InputArea({ input, setInput, sendMessage }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const maxHeight = 150;
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`;
    }
  }, [input]);

  return (
    <div className="absolute bottom-0 inset-x-0 p-4 z-10 w-full">
      <div className="flex w-full md:w-[55%] mx-auto space-x-2 rounded-3xl p-2 shadow-lg bg-slate-100 dark:bg-gray-800 border border-slate-600 dark:border-gray-400">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
          placeholder="How can I assist you today?"
          className="flex-1 bg-transparent py-2 focus:outline-none ml-2 resize-none overflow-y-auto custom-scrollbar"
          rows={1}
        />
        <div className="flex justify-center">
            <button
            onClick={sendMessage}
            className={`self-center p-2 bg-orange-500 rounded-full transition duration-200 ${input ? "opacity-100 hover:opacity-80" : "opacity-50"}`}>
            <Image src="/send.svg" alt="send icon" width={20} height={20} />
            </button>
        </div>
      </div>
      <p className="w-full text-center text-[10px] md:text-xs text-gray-700 dark:text-gray-300 p-1">Mistral AI may make mistakes. Consider verifying important information.</p>
    </div>
  );
}
