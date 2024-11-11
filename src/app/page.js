"use client";

import { Mistral } from '@mistralai/mistralai';
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import InputArea from './components/InputArea';
import ScrollToBottomButton from './components/ScrollToBottomButton';
import Header from './components/Header';
import LoadingConponent from './components/LoadingComponent';
import AIMessage from './components/AIMessage';
import UserMessage from './components/UserMessage';
import APIRequest from './api/MistralAPI';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);


  // Function to scroll to the bottom of the chat box
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollButton(false);  // Hide button when scrolled to bottom
  };

  // Detect scroll position to toggle "Scroll to Bottom" button
  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      setShowScrollButton(scrollTop + clientHeight < scrollHeight - 50); // Show button if not near bottom
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const editMessage = async (targetContent, newContent) => {
    let newMessages = messages
    const lastIndex = newMessages.map(msg => msg.content).lastIndexOf(targetContent);
    if (lastIndex !== -1) {
      newMessages[lastIndex].content = newContent;
      newMessages.splice(lastIndex + 1);
    }
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const botMessage = await APIRequest(newMessages)
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };


  const reloadMessage = async (targetContent) => {
    let newMessages = messages
    const lastIndex = newMessages.map(msg => msg.content).lastIndexOf(targetContent);
    if (lastIndex !== -1) {
      newMessages.splice(lastIndex + 1);
    }
    while (newMessages.length > 0 && newMessages[newMessages.length - 1].role !== "user") {
      newMessages.pop();
    }
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const botMessage = await APIRequest(newMessages)
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };


  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const botMessage = await APIRequest([...messages, userMessage])
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
        <div className="relative w-svh flex flex-col h-svh items-center"> 
          <Header />
          <div className='blur-3xl opacity-80 h-full w-full justify-between hidden md:flex'>
            <Image
            src="/MistralAiBarColor.png"
            alt="Logo Mistral AI blur"
            width={200}
            height={900}
            />
            <Image
            src="/MistralAiBarColor.png"
            alt="Logo Mistral AI blur"
            width={200}
            height={900}
            className='rotate-180'
            />
          </div>
          <div className='blur-3xl opacity-80 h-full w-full justify-center items-end flex md:hidden'>
            <Image
            src="/MistralAiBarColorRotate.png"
            alt="Logo Mistral AI blur"
            width={300}
            height={700}
            className='rotate-180'
            />
          </div>
          <div 
            className="absolute top-0 left-0 z-8 flex justify-center w-full h-[90%] overflow-y-auto custom-scrollbar pt-8"
            ref={chatContainerRef}
            onScroll={handleScroll}
          >
            {messages.length === 0 && (
              <div className='h-full w-full flex justify-center items-center'>
                <h1 className='font-bold text-center text-2xl md:text-3xl text-white'>Hello, welcome on Le Chat!</h1>
              </div>
            ) || (
              <div className='flex-col justify-center w-[95%] md:w-3/4'>
                {messages.map((msg, idx) => (
                  <div key={idx} className='group'>
                  {msg.role === "user" ? 
                  ( <UserMessage content={msg.content} reloadMessage={reloadMessage} editMessage={editMessage}/>)
                    : ( <AIMessage content={msg.content} reloadMessage={reloadMessage}/>)}
                  </div>
                ))}
                <div ref={messagesEndRef} />
                {loading && ( <LoadingConponent/>)}
                <div className='h-24 w-full'/>
              </div>
            )}
          </div>

          {showScrollButton && (<ScrollToBottomButton scrollToBottom={scrollToBottom}/>)}
          <InputArea input={input} setInput={setInput} sendMessage={sendMessage} />
        </div>
  );
}
