import { useEffect, useState } from 'react';

const publicRoot = import.meta.env.BASE_URL || '/public';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsSticky(true);
      if (window.scrollY <= 10) setIsSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`
        sm:mx-20 md:mx-28 lg:mx-48 xl:mx-64 2xl:mx-80
        sticky top-0 z-10 text-accent bg-midShade rounded-b-3xl
        transition-all duration-300 ease-in-out
        ${isSticky ? 'py-3 px-6 sm:px-10 shadow-md' : 'py-5 px-8 sm:px-12'}
      `}
    >
      <div className="max-w-4xl mx-auto flex items-center gap-4 md:gap-6 lg:gap-10 transition-all duration-300">
        <div
          className={` flex-none
            overflow-hidden border-1 border-black rounded-full transition-all duration-300 
            ${isSticky ? 'w-14 sm:w-16' : 'w-20 sm:w-24'}
          `}
        >
          <img
            loading="lazy"
            src={`${publicRoot}/profile_image.jpg`}
            alt="profile-picture"
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Konstantinos Thomasiadis
          </h1>
          <h3
            className={`
              text-sm sm:text-base md:text-lg italic overflow-hidden transition-all duration-300 
              ${isSticky ? 'opacity-0 h-0' : 'opacity-100 h-auto'}
            `}
          >
            Software Engineer
          </h3>
        </div>
        <a
          href="https://1drv.ms/b/c/a2821bbdc8d13ccb/IQLLPNHIvRuCIICi8I4AAAAAAbesWtfc-emVMutFjs4_hLs"
          target="_blank"
          className="ml-auto flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent text-primary text-xs sm:text-sm md:text-base 
            font-semibold rounded-lg shadow-md hover:bg-primary hover:text-accent transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0" />
          </svg>
          <span className="hidden sm:inline">Download</span>
          <span>CV</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
