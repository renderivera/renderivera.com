import styled from "styled-components";
import Hero from "./Hero";
import Intro from "./Intro";
import { useRef } from "react";
import Projects from "./Projects";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

const Content = styled.div`
	max-width: 800px;
`;

export default function App() {
	const introRef = useRef<HTMLDivElement>();

	return (
		<Container>
			<Hero navTargetRef={introRef} />
			<Content>
				<Intro navTargetRef={introRef} />
				<Projects />
			</Content>
		</Container>
	);
}
