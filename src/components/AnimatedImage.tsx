import styled, { keyframes } from "styled-components";

const float = keyframes`
	0% { transform: rotateY(-5eg) rotateX(-5deg) rotateZ(-0.5deg) translateY(-3px) translateX(-2px)  }
	100% { transform: rotateY(5deg) rotateX(5deg) rotateZ(0.5deg) translateY(3px) translateX(2px)}
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
		</Container>
	);
}
