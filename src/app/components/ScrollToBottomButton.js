import Image from 'next/image';

export default function ScrollToBottomButton({ scrollToBottom }) {
  return (
    <button 
    onClick={scrollToBottom} 
    className="fixed bottom-1/2 right-10 p-2 bg-gray-700 rounded-full shadow-lg text-white hover:bg-orange-600 transition duration-200 invisible md:visible">
      <Image src="/send.svg" alt="arrow icon" width={20} height={20} className="rotate-180" />
    </button>
  );
}
