import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: 'home',
		},
		{
			id: 2,
			link: 'about',
		},
		{
			id: 3,
			link: 'portfolio',
		},
		{
			id: 4,
			link: 'experience',
		},
		{
			id: 5,
			link: 'contact',
		},
	];

	const socialLinks = [
		{
			id: 1,
			child: <FaLinkedin size={30} />,
			href: 'https://www.linkedin.com/in/mohammad-al-amin-584158102/',
			style: 'bg-blue-600',
		},
		{
			id: 2,
			child: <FaGithub size={30} />,
			href: 'https://github.com/md-alamin',
			style: 'bg-green-700',
		},
		{
			id: 3,
			child: <HiOutlineMail size={30} />,
			href: 'mailto:md.alamin.281293@gmail.com',
			style: 'bg-blue-700',
		},
	];

	return (
		<nav className="bg-black px-4 text-white fixed w-full">
			<div className="max-w-5xl mx-auto flex justify-between items-center h-20 ">
				<div>
					<h1 className="font-fancy text-4xl md:text-5xl">Alamin</h1>
				</div>
				<ul className="hidden md:flex">
					{links.map(({ link, id }) => (
						<li
							key={id}
							className="px-4 cursor-pointer text-gray-400 hover:text-gray-300 hover:scale-105 duration-200 capitalize font-medium"
						>
							{link}
						</li>
					))}
				</ul>
				<div
					onClick={() => setNav(!nav)}
					className="cursor-pointer pr-4 z-10 text-gray-400 hover:text-gray-300 hover:scale-105 duration-200 md:hidden"
				>
					{nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
				</div>
				{nav && (
					<ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700">
						{links.map(({ link, id }) => (
							<li
								key={id}
								className="p-4 cursor-pointer capitalize text-2xl text-gray-400 hover:text-gray-300 hover:scale-105 duration-200 font-medium"
							>
								{link}
							</li>
						))}
						<div className="flex gap-4 mt-4">
							{socialLinks.map(({ id, child, style, href }) => (
								<div
									key={id}
									className={`flex justify-center items-center h-14 px-4 cursor-pointer hover:scale-105 rounded-md duration-200 ${style}`}
								>
									<a
										href={href}
										target="_blank"
										rel="noreferrer"
										className="w-full flex justify-between items-center text-white"
									>
										{child}
									</a>
								</div>
							))}
						</div>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Header;
