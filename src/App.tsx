import styled from "styled-components";
import Hero from "./components/Hero";
import Intro from "./components/intro/Intro";
import CodeGpt from "./components/projects/CodeGpt";
import Ecommerce from "./components/projects/Ecommerce";
import ScrollBar from "./components/scrollbar/ScrollBar";
import Footer from "./components/Footer";
import { useRef } from "react";
import Seperator from "./components/Seperator";
import { BsCodeSlash, BsShop, BsChevronBarDown } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";

import { navType } from "./types/navType";
import Contact from "./components/Contact";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

const Section = styled.div`
	width: var(--padded-width);
	max-width: var(--content-width);
`;

export default function App() {
	const introNav: navType = {
		name: "About",
		icon: <RiContactsLine />,
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

	const contactNav: navType = {
		name: "Contact",
		icon: <AiOutlineMessage />,
		element: useRef<HTMLDivElement>(null),
		position: 0,
	};

	const navs: navType[] = [introNav, gptNav, ecomNav, contactNav];

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
			<Seperator />
			<Section ref={ecomNav.element}>
				<Ecommerce />
			</Section>
			<Seperator />
			<Section ref={contactNav.element}>
				<Contact />
			</Section>
			<Footer />
			<ScrollBar navs={navs} />
		</Container>
	);
}
