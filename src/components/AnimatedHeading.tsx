import styled from "styled-components";
import sepereatorBottom from "./assets/seperator-bottom.svg";
import sepereatorTop from "./assets/seperator-top.svg";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 300px;
	gap: 5px;
	transition: all 0.25s ease;
`;

const Heading = styled.h2`
	margin: 0;
	padding: 0 5px;
	font-weight: lighter;
`;
const Text = styled.p`
	margin: 0;
	padding: 0 5px;
`;

const Seperator = styled.div`
	height: 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	overflow: hidden;
`;
const wave = styled.img`
	width: 100%;
	object-fit: fill;
`;

const WaveTop = styled(wave)`
	transform-origin: bottom;
`;
const WaveBottom = styled(wave)`
	transform-origin: top;
	margin-top: -1px;
`;

export default function Paragraph({
	heading,
	children,
}: {
	heading: string;
	children: string;
}) {
	const scale = (r: HTMLImageElement) => {
		if (!r) return;
		const o = 40 / r.width;
		r.style.setProperty(`transform`, `scaleY(${o})`);
	};

	return (
		<Container>
			<Heading>{heading}</Heading>
			<Seperator>
				<WaveTop src={sepereatorTop} ref={scale} />
				<WaveBottom src={sepereatorBottom} ref={scale} />
			</Seperator>
			<Text>{children}</Text>
		</Container>
	);
}
