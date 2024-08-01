"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function CopyPage(params) {

  const router = useRouter();
  const [textToCopy, setTextToCopy] = useState('This is the text to be copied!');
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess('Copied!');
      })
      .catch(() => {
        setCopySuccess('Failed to copy!');
      });
  };

  return (
     <div className="min-h-screen flex-col items-center justify-between p-24 text-slate-900"  style={{ padding: '20px', textAlign: 'center', background: '#ffefcc' }}>
      
      <div className='p-10 bg-blue-400 mb-10 font-extrabold text-3xl'>
        <h1>Copy Text to Clipboard {params.copy}</h1>
        
      </div>
      

      
      <textarea className='text-neutral-950 w-80 mt-9 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 '
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
         rows={9}
         cols={50}
        style={{ marginBottom: '20px' }}
      />
      <br />
      <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={copyToClipboard} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Copy to Clipboard
      </button>
      {copySuccess && <p style={{ marginTop: '20px', color: 'green' }}>{copySuccess}</p>}

      <br/>
      <div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={( )=> router.push('/wheather')}>weather details</button>
      </div>
    </div>
  );
}
