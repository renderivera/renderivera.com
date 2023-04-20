import styled from "styled-components";
import seperatorTop from "../assets/seperator-top.svg";
import seperatorBottom from "../assets/seperator-bottom.svg";

const Container = styled.div`
	width: var(--absolute-width);
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	pointer-events: none;
`;

const wave = styled.img`
	min-width: var(--min-wave-width);
	object-fit: fill;
	@media (min-width: 1200px) {
		transform: scaleY(0.6);
	}
	@media (min-aspect-ratio: 16/9) {
		transform: scaleY(0.6);
	}
	@media (min-aspect-ratio: 20/9) {
		transform: scaleY(0.5);
	}
`;

const WaveTop = styled(wave)`
	transform-origin: bottom;
`;
const WaveBottom = styled(wave)`
	transform-origin: top;
	margin-top: -2px;
`;

export default function Seperator() {
	return (
		<Container>
			<WaveTop src={seperatorTop} alt="wave background" />
			<WaveBottom src={seperatorBottom} alt="wave background" />
		</Container>
	);
}
