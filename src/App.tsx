import styled from "styled-components";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import { useRef, useState, useEffect } from "react";
import Projects from "./components/Projects";
import ScrollBar from "./components/scrollbar/ScrollBar";
import Footer from "./components/Footer";
import NavTarget from "./types/NavTarget";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export default function App() {
	const heroRef = useRef<HTMLDivElement>();
	const introRef = useRef<HTMLDivElement>();

	const codegptRef = useRef<HTMLDivElement>();
	const ecommerceRef = useRef<HTMLDivElement>();
	const footerRef = useRef<HTMLDivElement>();

	const [navTargets, setNavTargets] = useState<NavTarget[]>([]);

	useEffect(() => {
		setNavTargets([
			{ title: "Start", ref: heroRef },
			{ title: "Intro", ref: introRef },
			{ title: "CodeGPT", ref: codegptRef },
			{ title: "Ecom", ref: ecommerceRef },
			{ title: "End", ref: footerRef },
		]);
	}, []);

	console.log("rerender");

	return (
		<Container>
			<Hero navRef={heroRef} navTargetRef={introRef} />
			<Intro navRef={introRef} />
			<Projects navRefCodegpt={codegptRef} navRefEcommerce={ecommerceRef} />
			<Footer navRef={footerRef} />
			<ScrollBar navTargets={navTargets} />
		</Container>
	);
}
