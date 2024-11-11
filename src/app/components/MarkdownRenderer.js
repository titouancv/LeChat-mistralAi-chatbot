import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';

const MarkdownRenderer = ({ markdown }) => {
  return (
    <div className='markdown-content'>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize, rehypeHighlight]}/>
    </div>
  );
};

export default MarkdownRenderer;
