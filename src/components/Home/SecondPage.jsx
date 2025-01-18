import React from 'react'
import { Link } from 'react-router-dom'
import BirthdayCard from './BirthdayCard.jsx'

const SecondPage = () => {
	return (
		<section className='h-auto w-full bg-[#ebdbcc] relative z-50 transition-all duration-300 px-7'>
			<div className='py-10 lg:mx-10 xl:mx-48 max-w-[1080px]'>
				<h1 className='font-sora text-4xl lg:text-7xl font-extrabold'>Play, Your Way</h1>

				<p className='mt-6 text-lg font-sora'>When it comes to get-togethers, the more is always the merrier. You bring the people, we’ll take care of the rest. Call us for customized birthdays, farewells, anniversaries and other events or group packages with entertainment, music and a fantastic range of F&B to choose from.</p>

				<div className='w-full h-auto flex-wrap lg:flex justify-between items-center'>
					<BirthdayCard
						svg="https://playarena.in/wp-content/uploads/2024/01/Birthday-Bashes-Icon.svg"
						title="Birthday Bashes"
						image="https://playarena.in/wp-content/uploads/2024/12/BIRTHDAY-1.webp"
						description="Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!"
					/>

					<BirthdayCard
						svg="https://playarena.in/wp-content/uploads/2023/12/Corporate-Events-Icon.svg"
						title="Corporte Evnts"
						image="https://playarena.in/wp-content/uploads/2024/12/corporate-1-1.webp"
						description="Nothing like a game to get the teamwork going. Talk to us to find out more about our corporate packages for offsites, team building activities, leadership meets, outbound learning and more."
					/>

					<BirthdayCard
						svg="https://playarena.in/wp-content/uploads/2023/12/Perfect-Dates-Icon.svg"
						title="Play Dates"
						image="https://playarena.in/wp-content/uploads/2024/12/PERFECT-DATE-1.webp"
						description="Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!"
					/>
				</div>

				<Link
					to="/"
					className='mt-14 underline font-sora flex justify-between items-center text-2xl lg:text-3xl hover:text-gray-500'
				>
					<h1>Have an offbeat idea? Create your own event, fully customised!</h1>
					<img src="https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black-line.svg" alt="" />
				</Link>

				<Link className='font-sora text-base font-semibold border-2 border-black rounded-md p-3 lg:hidden flex justify-between items-center mt-6'>
					<p>Find Out More</p>
					<img src="https://playarena.in/wp-content/themes/playarena.in/img/right-arrow-black-line.svg" alt="" />
				</Link>
			</div>
		</section>
	)
}

export default SecondPage
