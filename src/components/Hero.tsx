import styled from "styled-components";
import waveBottom from "../assets/hero-wave-bottom.svg";
import waveTop from "../assets/hero-wave-top.svg";
import seperatorTop from "../assets/seperator-bottom.svg";

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
	transform-origin: top;
	@media (min-aspect-ratio: 16/9) {
		transform: scaleY(0.75);
	}
	@media (min-aspect-ratio: 20/9) {
		transform: scaleY(0.5);
	}
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

export default function Hero() {
	return (
		<Main>
			<Container>
				<Content>
					<WaveTop src={waveTop} alt="wave background" />
					<Logo>
						<Heading>Renderivera</Heading>
						<SubHeading>Full Stack Development</SubHeading>
					</Logo>
					<WaveBottom src={waveBottom} alt="wave background" />
				</Content>
			</Container>
			<SeperatorTop>
				<SeperatorTopImg src={seperatorTop} alt="wave background" />
			</SeperatorTop>
		</Main>
	);
}

/*

*/
