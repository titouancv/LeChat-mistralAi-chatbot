import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex-col fixed top-4 left-4 z-10 p-2 bg-white backdrop-blur-sm bg-opacity-60 rounded-xl invisible md:visible">
        <a href='https://mistral.ai/'>
            <div className='flex'>        
                <Image
                src="/MistralLogo.png"
                alt="Logo Mistral AI"
                width={150}
                height={90}
                />
            </div>   
            <p className=' text-left text-xs text-gray-700 p-1'>Le Chat by <br></br><b>Titouan Carion-Vignaud</b></p>    
            <p className=' text-left text-xs text-gray-700 p-1'>Works with <br></br><b>mistral-large-2407</b></p>
        </a>
    </div>
  );
}
