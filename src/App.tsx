import styled from "styled-components";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import CodeGpt from "./components/projects/CodeGpt";
import Ecommerce from "./components/projects/Ecommerce";
import ScrollBar from "./components/scrollbar/ScrollBar";
import Footer from "./components/Footer";
import { useRef } from "react";
import Seperator from "./components/Seperator";
import {
	BsEmojiLaughing,
	BsCodeSlash,
	BsShop,
	BsChevronBarDown,
} from "react-icons/bs";

import { navType } from "./types/navType";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

const Section = styled.div``;

export default function App() {
	const introNav: navType = {
		name: "Intro",
		icon: <BsEmojiLaughing />,
		element: useRef<HTMLDivElement>(null),
		position: 0,
	};

	const gptNav: navType = {
		name: "CodeGpt",
		icon: <BsCodeSlash />,
		element: useRef<HTMLDivElement>(null),
		position: 0,
	};

	const ecomNav: navType = {
		name: "Ecommerce",
		icon: <BsShop />,
		element: useRef<HTMLDivElement>(null),
		position: 0,
	};

	const endNav: navType = {
		name: "End",
		icon: <BsChevronBarDown />,
		element: useRef<HTMLDivElement>(null),
		position: 0,
	};

	const navs: navType[] = [introNav, gptNav, ecomNav, endNav];

	console.log("rerender app");

	return (
		<Container>
			<Hero />
			<Section ref={introNav.element}>
				<Intro />
			</Section>
			<Seperator />
			<Section ref={gptNav.element}>
				<CodeGpt />
			</Section>
			<Section ref={ecomNav.element}>
				<Ecommerce />
			</Section>
			<Section ref={endNav.element}>
				<Footer />
			</Section>
			<ScrollBar navs={navs} />
		</Container>
	);
}
