import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: var(--intro-paragraph-width);
	gap: 5px;
	transition: all 0.25s ease;
`;

const Heading = styled.h2`
	margin: 0;
	padding: 0 5px;
	font-weight: lighter;
	border-bottom: 1px solid var(--color-text);
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
	children: string;
}) {
	return (
		<Container>
			<Heading>{heading}</Heading>
			<Text>{children}</Text>
		</Container>
	);
}
