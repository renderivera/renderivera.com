import styled, { keyframes } from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import waveBottom from "../assets/hero-wave-bottom-2.svg";
import waveTop from "../assets/hero-wave-top-2.svg";
import seperatorTop from "../assets/seperator-bottom.svg";
import { RefObject } from "react";

const Main = styled.div`
	width: var(--absolute-width);
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const bounce = keyframes`
	100% {transform: translateY(-15px);}
`;

const Navigator = styled.div`
	margin-bottom: 10px;
	position: absolute;
	bottom: 0;
	font-size: 40px;
	cursor: pointer;
	z-index: 10;
	animation: ${bounce} 2s ease-in-out infinite alternate;
`;

const Content = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	min-width: var(--min-wave-width);
`;

const wave = styled.img`
	position: absolute;

	@media (min-aspect-ratio: 16/9) {
		transform: scaleY(0.75);
	}
	@media (min-aspect-ratio: 20/9) {
		transform: scaleY(0.5);
	}
`;

const WaveTop = styled(wave)`
	transform-origin: top;
	top: 0;
`;
const WaveBottom = styled(wave)`
	transform-origin: bottom;
	bottom: 0;
`;

const SeperatorTop = styled.div`
	height: 100px;
	min-width: var(--min-wave-width);
`;

const SeperatorTopImg = styled.img`
	width: 100%;
	transform-origin: top;
	transform: scaleY(0.25);
	object-fit: fill;
`;

const Logo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 10;
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Heading = styled.h1`
	margin: 0;
	font-weight: lighter;
	width: fit-content;
	padding: 0 5px;
	border-bottom: 1px solid white;
`;

const SubHeading = styled.h2`
	margin: 0;
	font-weight: lighter;
`;

export default function Hero({
	navTargetRef,
	navRef,
}: {
	navTargetRef?: RefObject<HTMLDivElement | undefined>;
	navRef: RefObject<HTMLDivElement | undefined>;
}) {
	function scroll() {
		navTargetRef?.current?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<Main>
			<Container ref={navRef as RefObject<HTMLDivElement>}>
				<Content>
					<WaveTop src={waveTop} />
					<Logo>
						<Heading>Renderivera</Heading>
						<SubHeading>Full Stack Development</SubHeading>
					</Logo>
					<WaveBottom src={waveBottom} />
				</Content>
				<Navigator onClick={scroll}>
					<BsChevronDown />
				</Navigator>
			</Container>
			<SeperatorTop>
				<SeperatorTopImg src={seperatorTop} />
			</SeperatorTop>
		</Main>
	);
}

/*

*/
