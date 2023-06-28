import React from 'react';

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-950 via-black to-black"
		>
			<div className="max-w-5xl p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
				<div className="md:pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<p className="text-xl my-10">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
					reiciendis id voluptatum laudantium possimus eligendi soluta.
					Quisquam, culpa! Deleniti ex distinctio cupiditate, quidem eum facilis
					perferendis eaque obcaecati corrupti ullam! Quo in at, numquam aperiam
					beatae debitis tempore reiciendis deleniti cum fugit voluptates quod
					cumque a minima porro, ducimus quam.
				</p>
				<p className="text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi
					odio, odit ea explicabo illo delectus enim, et necessitatibus, natus
					voluptate reiciendis sapiente animi alias dolor ullam possimus
					officiis. Officia ipsam, optio eos rerum iure fugit magnam maiores
					illo natus dolor dicta, deleniti autem. Quidem possimus voluptate
					architecto reiciendis optio.
				</p>
			</div>
		</div>
	);
};

export default About;
