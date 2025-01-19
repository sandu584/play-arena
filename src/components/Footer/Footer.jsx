import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSend } from "react-icons/io";

const Footer = () => {
	return (
		<section className='min-h-[48px] h-auto w-full bg-black text-white font-sora'>

			<div className='min-h-[400px] h-full w-full flex justify-center items-center border-b-2 border-blue-600'>

				<div className='w-full h-full p-5 min-h-[310px] max-w-[1080px] flex lg:gap-20 gap-4 lg:flex-row flex-col'>

					<div className='w-full flex flex-col justify-around items-start p-2 gap-4'>
						<div>
							<h1 className='lg:text-5xl text-3xl font-bold mb-3'>Never miss an update</h1>
							<p>Subscribe to our Newsletter</p>
						</div>
						<button className='w-full text-black flex justify-center items-center'>
							<input type="email" className='outline-none p-2.5 w-full rounded-l-lg' placeholder='Enter Your Email ID' />
							<img className='bg-white p-3 rounded-r-lg' src="https://playarena.in/wp-content/themes/playarena.in/img/subscribe-blue.svg" alt="" />
						</button>
					</div>

					<div className='w-full lg:block hidden p-3'>
						<p className='text-sm mb-2'><b>Play Arena Sports & Adventure Pvt. Ltd.</b></p>
						<p className='text-sm text-gray-400 mb-4 leading-6'>Sy#75, Hosa Road, off Sarjapur Road, opp Silverwood Regency Apartments, Kasavanahalli, Bangalore 560035</p>
						<div className='flex gap-6'>
							<Link><img className='w-8' src="https://playarena.in/wp-content/uploads/2024/05/Instagram.svg" alt="" /></Link>
							<Link><img className='w-8' src="https://playarena.in/wp-content/uploads/2024/05/YouTube.svg" alt="" /></Link>
							<Link><img className='w-8' src="https://playarena.in/wp-content/uploads/2024/05/Facebook.svg" alt="" /></Link>
							<Link><img className='w-8' src="https://playarena.in/wp-content/uploads/2024/05/LinkedIn.svg" alt="" /></Link>
						</div>
					</div>

					<div className='w-full px-2 flex lg:justify-between justify-start items-start text-sm gap-10'>
						<div className='flex flex-col justify-start gap-4'>
							<div className='flex flex-col gap-1'>
								<p className='text-white'><b>Play</b></p>
								<Link>Prime</Link>
								<Link>Pixel</Link>
								<Link>Studio</Link>
								<Link>Union</Link>
								<Link>Junior</Link>
							</div>
							<div className='flex flex-col gap-1'>
								<p><b>Food & Beverages</b></p>
								<Link className='text-blue-400'>Food Court</Link>
								<Link className='text-blue-400'>Restaurant</Link>
							</div>
						</div>

						<div className='flex flex-col h-full justify-between gap-4'>
							<div className='flex flex-col gap-1'>
								<p><b>Participate</b></p>
								<Link>Up Your Game</Link>
								<Link>Events</Link>
							</div>
							<div className='flex flex-col gap-1'>
								<p><b>Host</b></p>
								<Link className='text-blue-400'>Birthdays at PLaY</Link>
								<Link className='text-blue-400'>Corporate events</Link>
								<Link className='text-blue-400'>Make an Enquiry</Link>
							</div>
							<div className='flex flex-col gap-1'>
								<p><b>Contact</b></p>
								<Link className='text-blue-400'>99000 999 22</Link>
								<Link className='text-blue-400'>info@playarena.in</Link>
								<Link className='text-blue-400'>Get Directions</Link>
							</div>
						</div>
					</div>

				</div>

			</div>

			<div className='min-h-20 h-full p-2 flex lg:flex-nowrap flex-wrap justify-center items-center text-sm'>
				<p>Copyright &copy; 2025. All rights reserved.</p>
				<span><Link className='text-blue-400'>&nbsp; Disclaimer </Link> &#124; <Link className='text-blue-400'>Privacy Policy</Link></span>
			</div>
		</section>
	)
}

export default Footer
