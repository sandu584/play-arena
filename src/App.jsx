import { useState } from "react";
import FifthPage from "./components/Home/FifthPage";
import FirstPage from "./components/Home/FirstPage";
import FourthPage from "./components/Home/FourthPage";
import InfiniteSlider from "./components/Home/InfiniteSlider";
import SecondPage from "./components/Home/SecondPage";
import ThirdPage from "./components/Home/ThirdPage";
import { CardProvider } from "./store/CardContextProvider";

function App() {
	const [id, setId] = useState(0);

	return (

		<CardProvider value={{ id, setId }}>
			<div className="h-auto w-full">
				<FirstPage />
				<SecondPage />
				<ThirdPage />
				<FourthPage />
				<InfiniteSlider />
				<FifthPage />
			</div>
		</CardProvider>
	);
}

export default App;
