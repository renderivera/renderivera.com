import styled, { keyframes } from "styled-components";
import Atropos from "atropos/react";

const float = keyframes`
	0% { transform: rotateY(-10deg) rotateX(-2deg) rotate(-0.5deg) translateY(-3px)  }
	100% { transform: rotateY(10deg) rotateX(2deg) rotate(0.5deg) translateY(3px) }
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

const Description = styled.p`
	margin: 0;
	font-weight: lighter;
`;

export default function AnimatedImage({
	margin,
	borderRadius,
	src,
	className,
	description,
}: {
	margin?: string;
	borderRadius?: string;
	src: string;
	className: string;
	description: string;
}) {
	return (
		<Container style={{ margin }}>
			<FApo rotateXMax={5} rotateYMax={5} shadow={false} activeOffset={0}>
				<img
					className={className}
					src={src}
					style={{ borderRadius }}
					alt={description}
				/>
			</FApo>
			<Description>{description}</Description>
		</Container>
	);
}
