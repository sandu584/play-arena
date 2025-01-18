import Card from "./Card"

const FirstPage = () => {
    return (
        <section className="h-screen w-full relative pt-16 lg:pt-20">
            {/* Video Section */}
            <div className="bg-black relative z-10 h-5/6 w-full">
                <video
                    src="../../../videos/prime-10sec.mp4"
                    muted
                    loop
                    autoPlay
                    className="object-cover h-full w-full"
                ></video>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 z-30 w-full overflow-visible lg:h-1/6 flex">
                <Card
                    svg="https://playarena.in/wp-content/themes/playarena.in/img/union.svg"
                    title="Prime"
                    description="Strategy and action sports for the squad"
                    gamesNo="7"
                    bgColor="#EDFFB3"
                />
                
                <Card
                    svg="https://playarena.in/wp-content/themes/playarena.in/img/studio.svg"
                    title="Studio"
                    description="Short format, big thrills served a la carte"
                    gamesNo="8"
                    bgColor="#EDFFB3"
                />
                
                <Card
                    svg="https://playarena.in/wp-content/themes/playarena.in/img/prime.svg"
                    title="Union"
                    description="Classic favourites for the recreational sport"
                    gamesNo="7"
                    bgColor="#EDFFB3"
                />
                
                <Card
                    svg="https://playarena.in/wp-content/themes/playarena.in/img/junior.svg"
                    title="Junior"
                    description="Toddler-sized fun for little champs"
                    gamesNo="2"
                    bgColor="#EDFFB3"
                />
                
                <Card
                    svg="https://playarena.in/wp-content/themes/playarena.in/img/pixel.svg"
                    title="Pixel"
                    description="Shoot, race and more in the gamer’s den"
                    gamesNo="7"
                    bgColor="#EDFFB3"
                />
            </div>
        </section>
    )
}

export default FirstPage
