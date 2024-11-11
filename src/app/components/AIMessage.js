import MarkdownRenderer from './MarkdownRenderer';
import CopyButton from './CopyButton';
import Image from 'next/image';
import ReloadButton from './ReloadButton';


export default function AIMessage({content, reloadMessage}) {

    const reload = () => {
        reloadMessage(content);
    }
    
  return (
    <div className='flex justify-start'>
    <div className="flex flex-col md:flex-row max-w-[90%] items-start my-2 py-2 px-4 rounded-2xl">
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
        <div className='flex-col'>
            <MarkdownRenderer markdown={content} />
            <div className={`flex justify-start md:opacity-0 group-hover:opacity-100 transition duration-200`}>
                <CopyButton textToCopy={content} />
                <ReloadButton reload={reload}/>
            </div>  
        </div>
    </div> 
    </div>
  );
}
