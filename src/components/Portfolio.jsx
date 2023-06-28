import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: arrayDestruct,
		},
		{
			id: 2,
			src: reactParallax,
		},
		{
			id: 3,
			src: navbar,
		},
		{
			id: 4,
			src: reactSmooth,
		},
		{
			id: 5,
			src: installNode,
		},
		{
			id: 6,
			src: reactWeather,
		},
	];
	return (
		<div
			name="portfolio"
			className="w-full bg-gradient-to-b from-black via-black to-gray-950 text-white pt-20"
		>
			<div className="max-w-5xl p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Portfolio
					</p>
					<p className="my-10 text-xl">Check out some of my work right here!</p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src }) => (
						<div
							key={id}
							className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
						>
							<img
								src={src}
								alt=""
								loading="lazy"
								className="rounded-se-md rounded-ss-md hover:scale-105 duration-200"
							/>
							<div className="flex items-center justify-center gap-[1px] mt-[1px]">
								<button className="my-btn w-1/2 rounded-es-lg">Demo</button>
								<button className="my-btn w-1/2  rounded-ee-lg">Code</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
