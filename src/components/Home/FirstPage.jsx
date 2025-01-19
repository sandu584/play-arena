import { useEffect, useState } from "react"
import Card from "./Card"
import { CardProvider, useCard } from "../../store/CardContextProvider.js";

const FirstPage = () => {

    const { id } = useCard();
    const [currVideo, setCurrVideo] = useState(id);
    useEffect(()=>{
        setCurrVideo(id);
    }, [id])

    const cardsInfo = [
        {
            id: "0",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/union.svg",
            title: "Prime",
            description: "Strategy and action sports for the squad",
            gamesNo: "7",
            bgColor: "#EDFFB3",
            video: "https://res.cloudinary.com/sandeepk/video/upload/v1737280492/prime-10sec_jpizld.mp4",
        },
        {
            id: "1",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/studio.svg",
            title: "Studio",
            description: "Short format, big thrills served a la carte",
            gamesNo: "8",
            bgColor: "#E8E8E8",
            video: "https://res.cloudinary.com/sandeepk/video/upload/v1737280503/studio-10sec-1_phx1zo.mp4",
        },
        {
            id: "2",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/prime.svg",
            title: "Union",
            description: "Classic favourites for the recreational sport",
            gamesNo: "7",
            bgColor: "#B3F0FF",
            video: "https://res.cloudinary.com/sandeepk/video/upload/v1737280493/union-10sec_a8orei.mp4",
        },
        {
            id: "3",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/junior.svg",
            title: "Junior",
            description: "Toddler-sized fun for little champs",
            gamesNo: "2",
            bgColor: "#CBDED4",
            video: "https://res.cloudinary.com/sandeepk/video/upload/v1737280580/junior-10sec_fchu6l.mp4",
        },
        {
            id: "4",
            svg: "https://playarena.in/wp-content/themes/playarena.in/img/pixel.svg",
            title: "Pixel",
            description: "Shoot, race and more in the gamer’s den",
            gamesNo: "7",
            bgColor: "#D1EBD8",
            video: "https://res.cloudinary.com/sandeepk/video/upload/v1737280567/pixel-10sec-2_zibgtk.mp4",
        }
    ];

    return (
        <section className="h-screen w-full relative pt-16 lg:pt-20">
            {/* Video Section */}
            <div className="bg-black relative z-10 h-5/6 w-full">
                <video
                    src={cardsInfo[currVideo].video}
                    muted
                    loop
                    autoPlay
                    className="object-cover h-full w-full"
                ></video>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 z-30 w-full overflow-visible lg:h-1/6 flex">
                {
                    cardsInfo.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            svg={card.svg}
                            title={card.title}
                            description={card.description}
                            gamesNo={card.gamesNo}
                            bgColor={card.bgColor}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default FirstPage
