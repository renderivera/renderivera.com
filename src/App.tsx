import styled from "styled-components";
import Hero from "./Hero";
import Intro from "./Intro";
import { useRef } from "react";

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export default function App() {
	const introRef = useRef<HTMLDivElement>();

	return (
		<Container>
			<Hero navTargetRef={introRef} />
			<Intro navTargetRef={introRef} />
		</Container>
	);
}
