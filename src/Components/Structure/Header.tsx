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
				flex flex-col justify-center items-center 
				text-center text-white
				pb-5 px-10 rounded-b-2xl bg-blue-900
				z-10 sticky top-0
				transition-transform duration-100 ${!isSticky ? 'pt-5' : '-translate-y-5 pt-10'}
			`}
    >
      <h1 className="text-2xl mb-2">Konstantinos Thomasiadis</h1>
      <h3
        className={`${
          isSticky ? 'opacity-0 h-0' : 'opacity-100 h-auto'
        } text-xl italic transition-[opacity] duration-300 overflow-hidden`}
      >
        personal portfolio
      </h3>
    </header>
  );
}

export default Header;
