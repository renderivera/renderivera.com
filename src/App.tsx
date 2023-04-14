import styled from "styled-components";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ScrollBar from "./components/scrollbar/ScrollBar";
import Footer from "./components/Footer";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export default function App() {
	return (
		<Container>
			<Hero />
			<Intro />
			<Projects />
			<Footer />
			<ScrollBar />
		</Container>
	);
}
