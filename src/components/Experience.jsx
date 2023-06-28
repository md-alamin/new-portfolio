import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
	const techs = [
		{
			id: 1,
			src: html,
			title: 'HTML',
			style: 'shadow-orange-500',
		},
		{
			id: 2,
			src: css,
			title: 'CSS',
			style: 'shadow-blue-500',
		},
		{
			id: 3,
			src: javascript,
			title: 'JavaScript',
			style: 'shadow-yellow-500',
		},
		{
			id: 4,
			src: reactImage,
			title: 'React',
			style: 'shadow-blue-600',
		},
		{
			id: 5,
			src: tailwind,
			title: 'Tailwind',
			style: 'shadow-sky-400',
		},
		{
			id: 6,
			src: github,
			title: 'GitHub',
			style: 'shadow-gray-400',
		},
	];
	return (
		<div
			name="experience"
			className="w-full bg-gradient-to-b from-gray-950 via-black to-black pt-20"
		>
			<div className="max-w-5xl p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Experience
					</p>
					<p className="text-xl py-10">
						These are the technologies I have worked with
					</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
						>
							<img loading="lazy" src={src} alt="" className="w-20 mx-auto" />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
