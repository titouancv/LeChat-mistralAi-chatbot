import { useState, useEffect, useRef } from 'react';
import CopyButton from './CopyButton';
import Image from 'next/image';
import ReloadButton from './ReloadButton';
import EditButton from './EditButton';


export default function UserMessage({content, reloadMessage, editMessage}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableContent, setEditableContent] = useState(content);
    const messagetextareaRef = useRef(null);

    const reload = () => {
        reloadMessage(content);
    };

    const handleContentChange = (e) => {
        setEditableContent(e.target.value);
    };

    const saveEdit = () => {
        if(editableContent){
            setIsEditing(false);
            editMessage(content, editableContent);
        }
    };

    const cancelEdit = () => {
        setIsEditing(false);
        setEditableContent(content);
    };

    useEffect(() => {
        if (messagetextareaRef.current) {
            messagetextareaRef.current.style.height = "auto";
          const maxHeight = 150;
          messagetextareaRef.current.style.height = `${Math.min(messagetextareaRef.current.scrollHeight, maxHeight)}px`;
        }
      }, [editableContent]);

  return (
    <div className='flex justify-end'>
        {isEditing ? (
            <div className={`flex w-full md:w-[70%] items-start my-2 py-2 px-4 space-x-2`} >
                <div className="flex-col w-full p-4 rounded-3xl bg-gray-800 border border-gray-400">
                    <textarea
                    ref={messagetextareaRef}
                    value={editableContent}
                    onChange={(e) => setEditableContent(e.target.value)}
                    className="flex-1 bg-transparent py-2 focus:outline-none text-white ml-2 resize-none overflow-y-auto custom-scrollbar"
                    rows={1}
                    />
                    <div className="flex w-full justify-end px-2 space-x-2 mt-2">
                        <button
                        onClick={cancelEdit}
                        className={`flex space-x-1 px-4 self-center p-2 bg-white rounded-full transition duration-200 opacity-100 hover:opacity-80`}>
                        <p className='font-bold text-background'>Cancel</p>
                        <Image src="/cancel.svg" alt="cancel icon" width={20} height={20} className='self-center'/>
                        </button>
                        <button
                        onClick={saveEdit}
                        className={`flex space-x-1 px-4 self-center p-2 bg-orange-500 rounded-full transition duration-200 ${editableContent ? "opacity-100 hover:opacity-80" : "opacity-50"}`}>
                        <p className='font-bold'>Update</p>
                        <Image src="/send.svg" alt="send icon" width={20} height={20} className='self-center'/>
                        </button>
                    </div>
                </div>
            </div> 
        ) : (
            <div className={`flex max-w-[70%] items-start my-2 py-2 px-4 space-x-2`} >
                <div className='flex-col'>
                    <div className='flex w-full justify-center py-2 px-4 text-left rounded-md bg-orange-100'>
                        <p className="mx-2 text-background">{editableContent}</p>
                    </div>
                    <div className={`flex justify-end md:opacity-0 group-hover:opacity-100 transition duration-200`}>
                        <CopyButton textToCopy={content} />
                        <ReloadButton reload={reload}/>
                        <EditButton setIsEditing={setIsEditing} />
                    </div> 
                </div>
            </div> 
        )} 
    </div>
  );
}
