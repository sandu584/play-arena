import FifthPage from "./components/Home/FifthPage";
import FirstPage from "./components/Home/FirstPage";
import FourthPage from "./components/Home/FourthPage";
import InfiniteSlider from "./components/Home/InfiniteSlider";
import SecondPage from "./components/Home/SecondPage";
import ThirdPage from "./components/Home/ThirdPage";

function App() {
	return (
		<div className="h-auto w-full">
			<FirstPage />
			<SecondPage />
			<ThirdPage />
			<FourthPage />
			<InfiniteSlider/>
			<FifthPage />
		</div>
	);
}

export default App;
