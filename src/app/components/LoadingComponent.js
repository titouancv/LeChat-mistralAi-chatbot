import Image from 'next/image';

export default function LoadingConponent() {
  return (
    <div className={`flex flex-col md:flex-row max-w-[90%] items-start my-2 py-2 px-4`}>
        <Image
        src="/MistralAiLogo.png"
        alt="Logo Mistral AI"
        width={50}
        height={50}
        className='hidden md:flex px-2 pt-1'
        />
        <Image
        src="/MistralAiLogo.png"
        alt="Logo Mistral AI"
        width={35}
        height={35}
        className='flex md:hidden py-1'
        />
        <p className="font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 animate-pulse">Loading...</p>
    </div>
  );
}
