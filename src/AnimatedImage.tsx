import styled, { keyframes } from "styled-components";
import Atropos from "atropos/react";

const float = keyframes`
	0% { transform: rotateY(-10deg) rotateX(-2deg) rotate(-0.5deg) translateY(-5px)  }
	100% { transform: rotateY(10deg) rotateX(2deg) rotate(0.5deg) translateY(5px) }
`;

const Img = styled.img`
	transition: all 0.5s;
	width: 100%;

	/*
	animation-play-state: paused;
	animation: ${float} var(--gradient-animation-duration) ease-in-out infinite
		alternate;*/
`;

const shadowWidthAnimation = keyframes`
	0% { width: 80%; filter: blur(9px); }
	100% { width: 95%; filter: blur(5px); }
`;

const Shadow = styled.div`
	height: 5px;
	border-radius: 50%;
	width: 80%;
	background: gray;

	animation: ${shadowWidthAnimation} var(--gradient-animation-duration)
		ease-in-out infinite alternate;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	justify-content: center;
	align-items: center;

	transition: all 0.5s;
`;

const FApo = styled(Atropos)`
	animation: ${float} var(--gradient-animation-duration) ease-in-out infinite
		alternate;
`;

export default function AnimatedImage({
	maxWidth,
	maxHeight,
	margin,
	borderRadius,
	src,
}: {
	maxWidth?: string;
	maxHeight?: string;
	margin?: string;
	borderRadius?: string;
	src: string;
}) {
	return (
		<Container style={{ maxWidth, margin }}>
			<FApo shadow={false} activeOffset={0}>
				<Img src={src} style={{ borderRadius, maxHeight }} />
			</FApo>
			<Shadow />
		</Container>
	);
}
