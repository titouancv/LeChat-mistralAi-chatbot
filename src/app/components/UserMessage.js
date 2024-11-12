import { useState, useEffect, useRef } from 'react';
import CopyButton from './CopyButton';
import ReloadButton from './ReloadButton';
import EditButton from './EditButton';


export default function UserMessage({content, reloadMessage, editMessage}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableContent, setEditableContent] = useState(content);
    const messagetextareaRef = useRef(null);

    // Call the reload function in the parent component
    const reload = () => {
        reloadMessage(content);
    };

    // Call the edit function in the parent component
    const saveEdit = () => {
        if(editableContent){
            setIsEditing(false);
            editMessage(content, editableContent);
        }
    };

    // Return to the original message
    const cancelEdit = () => {
        setIsEditing(false);
        setEditableContent(content);
    };

    // Adjust the size of textarea
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
                <div className="flex-col w-full p-4 rounded-3xl shadow-lg bg-slate-100 dark:bg-gray-800 border border-slate-600 dark:border-gray-400">
                    <div className='flex w-full'>
                        <textarea
                        ref={messagetextareaRef}
                        value={editableContent}
                        onChange={(e) => setEditableContent(e.target.value)}
                        className="flex-1 bg-transparent py-2 focus:outline-none ml-2 resize-none overflow-y-auto custom-scrollbar"
                        rows={1}
                        />
                    </div>
                    <div className="flex w-full justify-end px-2 space-x-2 mt-2">
                        <button
                        onClick={cancelEdit}
                        className={`flex space-x-1 px-4 self-center p-2 bg-foreground rounded-full transition duration-200 opacity-100 hover:opacity-80`}>
                        <p className='font-bold text-background'>Cancel</p>
                        </button>
                        <button
                        onClick={saveEdit}
                        className={`flex space-x-1 px-4 self-center p-2 bg-orange-500 rounded-full transition duration-200 ${editableContent ? "opacity-100 hover:opacity-80" : "opacity-50"}`}>
                        <p className='font-bold'>Update</p>
                        <div className='flex w-6 h-6'><SendSVG color="var(--foreground)"/></div>
                        </button>
                    </div>
                </div>
            </div> 
        ) : (
            <div className={`flex max-w-[70%] items-start my-2 py-2 px-4 space-x-2`} >
                <div className='flex-col'>
                    <div className='flex w-full justify-center py-2 px-4 text-left rounded-md shadow-lg bg-orange-400'>
                        <p className="mx-2 text-gray-900">{editableContent}</p>
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
