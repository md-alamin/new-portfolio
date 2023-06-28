import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLink = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: 'https://www.linkedin.com/in/mohammad-al-amin-584158102/',
			style: 'rounded-tr-md hover:bg-blue-600',
		},
		{
			id: 2,
			child: (
				<>
					GitHub <FaGithub size={30} />
				</>
			),
			href: 'https://github.com/md-alamin',
			style: 'hover:bg-green-700',
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiOutlineMail size={30} />
				</>
			),
			href: 'mailto:md.alamin.281293@gmail.com',
			style: 'rounded-br-lg hover:bg-blue-700',
		},
	];
	return (
		<div className="hidden lg:flex flex-col fixed top-[35%] left-0">
			<ul>
				{links.map(({ id, child, href, style }) => (
					<li
						key={id}
						className={`flex justify-center items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 cursor-pointer ${style}`}
					>
						<a
							href={href}
							target="_blank"
							rel="noreferrer"
							className="w-full flex justify-between items-center text-white"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLink;
