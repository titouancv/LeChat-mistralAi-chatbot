import Image from 'next/image';
import { SendSVG } from './Svg';

export default function ScrollToBottomButton({ scrollToBottom }) {
  return (
    <button 
    onClick={scrollToBottom} 
    className="fixed bottom-[20%] right-4 md:bottom-1/2 md:right-10 p-2 shadow-lg bg-slate-100 dark:bg-gray-800 border border-slate-600 dark:border-gray-400 hover:border-transparent rounded-full hover:bg-orange-500 transition duration-200">
      <div className='flex w-6 h-6 rotate-180'><SendSVG color="var(--foreground)"/></div>
    </button>
  );
}
