import styled from "styled-components";
import seperatorTop from "../assets/seperator-top.svg";
import { RefObject } from "react";

const Container = styled.div`
	width: var(--absolute-width);
	height: 300px;
	position: relative;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;
const Wave = styled.img`
	margin-top: auto;
	min-width: var(--min-wave-width);
`;

const Text = styled.div`
	position: absolute;
	bottom: 0;

	text-align: center;
	width: 100%;
`;

export default function Footer({
	navRef,
}: {
	navRef: RefObject<HTMLDivElement | undefined>;
}) {
	return (
		<Container ref={navRef as RefObject<HTMLDivElement>}>
			<Text>© 2023 Renderivera</Text>
			<Wave src={seperatorTop} />
		</Container>
	);
}
