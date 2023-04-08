import styled, { keyframes } from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 300px;

	gap: 5px;
	transition: all 0.25s ease;

	&:hover {
		transform: translateY(-2px);
	}
`;

const anima = keyframes`
	20% {border-color: var(--color-gradient1)}
	40% {border-color: var(--color-gradient2)}
	60% {border-color: var(--color-gradient3)}
	80% {border-color: var(--color-gradient4)}
	100% {border-color: var(--color-gradient5)}
`;

const Heading = styled.h2`
	margin: 0;
	font-weight: lighter;
	padding: 0 5px;
	border-bottom: 1px solid var(--color-accent);
	animation: ${anima} var(--gradient-animation-duration) linear infinite
		alternate;
`;
const Text = styled.p`
	margin: 0;
	padding: 0 5px;
`;

export default function Paragraph({
	heading,
	children,
}: {
	heading: string;
	color?: string;
	background?: string;
	children: string;
}) {
	return (
		<Container>
			<Heading>{heading}</Heading>
			<Text>{children}</Text>
		</Container>
	);
}
