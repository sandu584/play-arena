import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSend } from "react-icons/io";

const Footer = () => {
	return (
		<section className='z-[500] h-auto w-full bg-black text-white'>

			{/* first div */}
			<div className='w-full min-h-80 h-full flex justify-center items-center'>

				{/* inner div */}
				<div className='min-h-80 h-auto min-w-[1080px] w-[1080px] bg-red-500 flex justify-center items-center gap-3'>

					<div className='h-full bg-amber-300 flex flex-col justify-around items-start'>
						<h1>Never miss an update</h1>
						<p>Subscribe to our Newsletter</p>
						<div className='flex justify-between w-full items-center'>
							<input type="text" />
							<IoIosSend />
						</div>
					</div>

					<div className='h-full w-72 bg-cyan-400'>
						<b>Play Arena Sports & Adventure Pvt. Ltd.</b>
						<p>Sy#75, Hosa Road, off Sarjapur Road, opp Silverwood Regency Apartments, Kasavanahalli, Bangalore 560035</p>
						<div className='flex'>
							<Link>Insta</Link>
							<Link>	YouTube</Link>
							<Link>Facebook</Link>
							<Link>LinkedIn</Link>
						</div>
					</div>

					<div>
						<div>
							<b>Play</b>
							<Link>Prime</Link>
							<Link>Pixel</Link>
							<Link>Studio</Link>
							<Link>Union</Link>
							<Link>Junior</Link>
						</div>
						<div>
							<b>Food & Beverages</b>
							<Link>Food Court</Link>
							<Link>Restaurant</Link>
						</div>
					</div>

					<div>
						<div>
							<b>Participate</b>
							<p>Up Your Game</p>
							<p>Events</p>
						</div>
						<div>
							<b>Host</b>
							<Link>Birthdays at PLaY</Link>
							<Link>Corporate events</Link>
							<Link>Make an Enquiry</Link>
						</div>

						<div>
							<b>Contact</b>
							<Link>99000 999 22</Link>
							<Link>info@playarena.in</Link>
							<Link>Get Directions</Link>
						</div>
					</div>
				</div>
			</div>

			<hr />

			<div className='w-full flex justify-center items-center p-3'>
				<p>Copyright &copy; 2025. All rights reserved. Disclaimer | Privacy Policy</p>
			</div>
		</section>
	)
}

export default Footer
