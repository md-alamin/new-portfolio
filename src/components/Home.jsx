import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BiSolidDownload } from 'react-icons/bi';
import HeroImage from '../assets/heroImage.png';
import Swal from 'sweetalert2';

const Home = () => {
	return (
		<div
			name="home"
			className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-950 py-24"
		>
			<div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-white h-full gap-10">
				<div className="flex justify-center items-center h-full">
					<div className="text-center md:text-left">
						<h1 className="text-6xl sm:text-7xl font-bold">
							I'm a Front End Developer
						</h1>
						<p className="md:text-lg font-bold text-gray-400 max-w-md my-10">
							I have been gaining experience building and designing software for
							the past 1 year. Currently, I love to work on web application
							using technologies like React, Tailwind, along with some
							experience with Express JS along with Mongo DB.
						</p>

						<div className="flex gap-6 justify-center">
							<button className="flex gap-1 items-center px-2 py-1 text-lg bg-white hover:bg-transparent text-black hover:text-white rounded border-b-2 border-b-white hover:border-b-2 hover:border-red-400 duration-300 group cursor-pointer">
								Portfolio
								<span className="group-hover:rotate-90 duration-300">
									<HiArrowNarrowRight></HiArrowNarrowRight>
								</span>
							</button>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									Swal.fire({
										title: 'Confirm Download',
										text: 'Are you sure you want to download the resume?',
										icon: 'question',
										showCancelButton: true,
										confirmButtonText: 'Yes, download it!',
										cancelButtonText: 'No, cancel!',
									}).then((result) => {
										if (result.isConfirmed) {
											const link = document.createElement('a');
											link.href = '/resume.pdf';
											link.download = 'resume.pdf';
											document.body.appendChild(link);
											link.click();
											document.body.removeChild(link);
										}
									});
								}}
								target="_blank"
								rel="noreferrer"
								className="flex gap-1 items-center px-2 py-1 text-lg bg-white hover:bg-transparent text-black hover:text-white rounded border-b-2 border-b-white hover:border-b-2 hover:border-red-400 duration-300 group cursor-pointer"
							>
								Resume
								<span className="group-hover:animate-bounce duration-300">
									<BiSolidDownload></BiSolidDownload>
								</span>
							</a>
						</div>
					</div>
				</div>
				<div>
					<img
						src={HeroImage}
						alt=""
						className="rounded-2xl w-2/3 md:w-full mx-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
