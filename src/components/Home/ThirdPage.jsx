import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const ThirdPage = () => {

    const slides = [
        {
            image: "https://playarena.in/wp-content/uploads/2025/01/storytelling-session-02-1200-x-800-px.png",
            title: "Storytelling Session - The New Year's Wish",
            description: "Spark your child's imagination with our enchanting Storytelling Session! Magical tales, fun activities, and endless adventures await. Join the fun today!"
        },
        {
            image: "https://playarena.in/wp-content/uploads/2025/01/movie-night-poster-for-website.jpg",
            title: "Movie Nights - Interstellar",
            description: "Come for the movie, stay for the memories-Starflix Nights is your ticket to a magical night under the stars!"
        },
        {
            image: "https://playarena.in/wp-content/uploads/2025/01/storytelling-session-02-1200-x-800-px.png",
            title: "Storytelling Session - The New Year's Wish",
            description: "Spark your child's imagination with our enchanting Storytelling Session! Magical tales, fun activities, and endless adventures await. Join the fun today!"
        },
        {
            image: "https://playarena.in/wp-content/uploads/2025/01/movie-night-poster-for-website.jpg",
            title: "Movie Nights - Interstellar",
            description: "Come for the movie, stay for the memories-Starflix Nights is your ticket to a magical night under the stars!"
        },
        {
            image: "https://playarena.in/wp-content/uploads/2025/01/storytelling-session-02-1200-x-800-px.png",
            title: "Storytelling Session - The New Year's Wish",
            description: "Spark your child's imagination with our enchanting Storytelling Session! Magical tales, fun activities, and endless adventures await. Join the fun today!"
        },
        {
            image: "https://playarena.in/wp-content/uploads/2025/01/movie-night-poster-for-website.jpg",
            title: "Movie Nights - Interstellar",
            description: "Come for the movie, stay for the memories-Starflix Nights is your ticket to a magical night under the stars!"
        },
        {
            image: "https://playarena.in/wp-content/uploads/2025/01/storytelling-session-02-1200-x-800-px.png",
            title: "Storytelling Session - The New Year's Wish",
            description: "Spark your child's imagination with our enchanting Storytelling Session! Magical tales, fun activities, and endless adventures await. Join the fun today!"
        },
        {
            image: "https://playarena.in/wp-content/uploads/2025/01/movie-night-poster-for-website.jpg",
            title: "Movie Nights - Interstellar",
            description: "Come for the movie, stay for the memories-Starflix Nights is your ticket to a magical night under the stars!"
        },
    ];

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default for larger screens (more than 1409px)
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1409, // For screens with width less than or equal to 1409px
                settings: {
                    slidesToShow: 3, // Show 4 slides for screens between 1409px and 1240px
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1270, // For screens with width less than or equal to 1240px
                settings: {
                    slidesToShow: 3, // Show 3 slides for screens between 1240px and 1025px
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1025, // For screens with width less than or equal to 1025px
                settings: {
                    slidesToShow: 2, // Show 2 slides for screens between 1025px and 768px
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, // For screens with width less than or equal to 768px
                settings: {
                    slidesToShow: 2, // Show 2 slides for tablets
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 658, // For screens with width less than or equal to 658px
                settings: {
                    slidesToShow: 1, // Show 1 slide for smaller screens
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // For screens with width less than or equal to 480px (mobile devices)
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile devices
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="min-h-screen w-screen bg-[#FFDB58]">
            <h1 className="uppercase mx-12 pt-10 text-3xl lg:text-4xl font-sora font-black px-6">Specials</h1>

            <div className='bg-[#73A580] py-6 h-auto w-11/12 m-auto mt-10 border-2 rounded-xl'>
                <Slider {...settings}>
                    {
                        slides.map((slide, index) => (
                            <div key={index}>
                                <div className="m-auto mx-10 min-h-[520px] relative flex justify-between w-80 flex-col rounded-xl hover:bg-[#8E362F] bg-clip-border text-gray-700 shadow-md bg-[#F5F5DC] hover:text-white transition-all duration-150 border-2 hover:border-black">
                                    <div>
                                        <div className="relative mx-4 mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                                            <img src={slide.image} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased font-sora">
                                                {slide.title}
                                            </h5>
                                            <p className="block font-sora text-base font-light leading-relaxed text-inherit antialiased">
                                                {slide.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <Link to="/" data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sora text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                            Read More
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
};

export default ThirdPage;