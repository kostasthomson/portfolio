function Header() {
	return (
		<header
			className="
			z-10 mb-2
			sticky top-4 
			flex flex-col justify-center items-center 
			text-center text-white"
		>
			<div className="w-2/3 py-5 px-10 rounded-xl bg-blue-900">
				<h1 className="text-4xl mb-2">Konstantinos Thomasiadis</h1>
				<h3 className="text-xl italic">personal portfolio</h3>
			</div>
		</header>
	);
}

export default Header;
