import styled, { keyframes } from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Container = styled.div`
	flex: 1;
	min-width: 300px;
	display: flex;
	gap: 10px;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const anima = keyframes`
	20% {color: var(--color-gradient1)}
	40% {color: var(--color-gradient2)}
	60% {color: var(--color-gradient3)}
	80% {color: var(--color-gradient4)}
	100% {color: var(--color-gradient5)}
`;

const QuoteChar = styled.div`
	font-size: 2em;
	line-height: 0.75;
	color: var(--color-accent);
	animation: ${anima} var(--gradient-animation-duration) linear infinite
		alternate;
`;
const Text = styled.p`
	margin: 0;
	font-size: 1.2em;
	font-style: italic;
`;
const Author = styled.p`
	margin: 0;
	font-weight: lighter;
`;

export default function Quote() {
	return (
		<Container>
			<QuoteChar>
				<FaQuoteLeft />
			</QuoteChar>
			<Content>
				<Text>
					As a highly passionate Full Stack Software Engineer with over 10 years
					of professional experience, I have had the privilege of developing
					solutions for renowned stakeholders like Bank of America, HBO,
					Starbucks, and BMW.
				</Text>
				<QuoteChar
					style={{
						height: "0px",
						marginLeft: "auto",
						transform: "translate(-30px, -30px)",
					}}
				>
					<FaQuoteRight />
				</QuoteChar>
				<Author>Reinhard Zach - Renderivera</Author>
			</Content>
		</Container>
	);
}
