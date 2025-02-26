import { useState } from 'react';

function Footer({ className, show }: { className?: string; show: boolean }) {
  const [messageValue, setMessageValue] = useState('');
  return (
    <footer
      className={`
      ${className ? className : ''}
      ${show ? 'flex' : 'hidden'}
      sm:mx-20 md:mx-28 lg:mx-48 xl:mx-64 2xl:mx-80
      text-black gap-2 justify-center items-center m-2`}
    >
      <textarea
        className="w-11/12 h-auto rounded-3xl py-2 px-4 text-base outline-none resize-none text-accent bg-gray-800"
        value={messageValue}
        onChange={(e) => setMessageValue(e.target.value)}
        onInput={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        rows={1}
        placeholder="Send me your question..."
      />
      <button className="me-2" onClick={() => console.log('send')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="bi bi-send-fill rotate-45 fill-accent sm:hover:fill-highlight transition-colors duration-100 ease-in"
          viewBox="0 0 16 16"
        >
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
