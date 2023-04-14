import styled, { keyframes } from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Container = styled.div`
	flex: 1;
	min-width: 300px;
	display: flex;
	gap: 10px;
	margin: 5px;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const QuoteCharLeft = styled.div`
	font-size: 1.5em;
	line-height: 0.75;
`;

const QuoteCharRight = styled(QuoteCharLeft)`
	height: 0px;
	margin-left: auto;
	transform: translate(0px, -20px);
`;

const Text = styled.p`
	margin: 0;
	font-size: 1.2em;
	font-style: italic;
`;

export default function Quote() {
	return (
		<Container>
			<QuoteCharLeft>
				<FaQuoteLeft />
			</QuoteCharLeft>
			<Content>
				<Text>
					As a highly passionate Full Stack Software Engineer with over 10 years
					of professional experience, I have had the privilege of developing
					solutions for renowned stakeholders like Bank of America, HBO,
					Starbucks, and BMW.
				</Text>
				<QuoteCharRight>
					<FaQuoteRight />
				</QuoteCharRight>
			</Content>
		</Container>
	);
}
