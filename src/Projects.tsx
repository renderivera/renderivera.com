import styled from "styled-components";
import Paragraph from "./Paragraph";
import CodegptIphoneMockup from "./assets/codegpt-iphone14-mockup-min.png";
import CodegptGalaxyMockup from "./assets/codegpt-Galaxy-S20-mockup-min.png";
import AnimatedImage from "./AnimatedImage";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 60px;
`;

const Heading = styled.h1``;

const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	width: 50%;
`;

export default function Projects() {
	return (
		<Container>
			<Heading>Sample Projects</Heading>
			<ProjectContainer>
				<Paragraph heading="CodeGPT.ninja">
					CodeGPT.ninja is a web app that allows you to generate code using
					GPT-3. It is built using React, Next.js, and Tailwind CSS.
				</Paragraph>
				<AnimatedImage
					src={CodegptGalaxyMockup}
					maxWidth="50%"
					maxHeight="70vh"
				/>
			</ProjectContainer>
			<ProjectContainer>
				<Paragraph heading="E-Commerce">
					A basic E-commerce web application using Stripe. A basic E-commerce
					web application using Stripe. A basic E-commerce web application using
					Stripe.
				</Paragraph>
			</ProjectContainer>
		</Container>
	);
}
