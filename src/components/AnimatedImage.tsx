import styled, { keyframes } from "styled-components";

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

const Image = styled.img`
	animation: ${float} var(--gradient-animation-duration) ease-in-out infinite
		alternate;
`;

const Description = styled.p`
	margin: 0;
	font-weight: lighter;
`;

export default function AnimatedImage({
	src,
	className,
	description,
}: {
	src: string;
	className: string;
	description: string;
}) {
	return (
		<Container className={className}>
			<Image src={src} alt={description} />
			<Description>{description}</Description>
		</Container>
	);
}
