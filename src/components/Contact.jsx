import React from 'react';

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full bg-gradient-to-b from-black via-black to-gray-950 py-20"
		>
			<div className="max-w-5xl p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Contact
					</p>
					<p className="text-xl py-10">
						Submit the form below to get in touch with me
					</p>
				</div>
				<div className="flex justify-center items-center mt-6">
					<form
						action="https://getform.io/f/c7bcffc5-9bbc-4135-9954-220784433fd7"
						method="POST"
						className="flex flex-col w-3/4 md:w-1/2"
					>
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
						/>
						<textarea
							name="message"
							rows="10"
							placeholder="Enter your message here"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
						></textarea>
						<input
							type="submit"
							value="Let's Talk"
							className="my-btn rounded-md cursor-pointer w-min mx-auto my-8"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
