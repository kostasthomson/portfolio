import { useEffect, useState } from 'react';

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
				${isSticky ? 'flex' : 'grid grid-cols-4'}
				text-center text-white
				pb-5 px-10 rounded-b-2xl bg-blue-900
				z-10 sticky top-0
				transition-transform duration-100 ${!isSticky ? 'pt-5' : '-translate-y-5 pt-10'}
			`}
    >
      <div
        className={`${isSticky ? 'w-24 transition-[width] duration-300' : 'w-28 m-auto'} overflow-hidden border-black rounded-full`}
      >
        <img loading="lazy" src="/profile_image.jpg" alt="profile-picture" />
      </div>
      <div
        className={`${isSticky ? '' : 'pl-5'} col-span-3 flex flex-col justify-center sm:items-start text-2xl`}
      >
        <h1 className="mb-2">Konstantinos Thomasiadis</h1>
        <h3
          className={`${
            isSticky
              ? 'opacity-0 h-0 transition-[opacity] duration-300'
              : 'opacity-100 h-auto'
          } text-xl italic overflow-hidden text-center`}
        >
          Software Engineer
        </h3>
      </div>
    </header>
  );
}

export default Header;
