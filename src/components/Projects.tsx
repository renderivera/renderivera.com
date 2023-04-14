import styled from "styled-components";
import Heading from "./Heading";
import CodegptGalaxyMockup from "../assets/codegpt-Galaxy-S20-mockup-min.png";
import CodegptComponentDiagram from "../assets/codegpt-component-diagram-min.png";
import AnimatedImage from "./AnimatedImage";
import Seperator from "./Seperator";
import { RefObject } from "react";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const H1 = styled.h1`
	margin-top: 0;
`;

const ProjectContainer = styled.div`
	max-width: var(--content-width);
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
`;

const ProjectContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const Paragraph = styled.p`
	flex: 1;
	margin: 5px;
	min-width: 50%;
`;

const SubHeading = styled.h3`
	margin: 0;
	margin-top: 50px;
`;

export default function Projects() {
	return (
		<Container>
			<Seperator />
			<H1>Sample Projects</H1>
			<ProjectContainer>
				<div className="nav-target" id="CodeGPT">
					<Heading heading="CodeGPT.ninja">
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS.
					</Heading>
				</div>
				<SubHeading>Overview</SubHeading>
				<ProjectContent>
					<AnimatedImage
						src={CodegptGalaxyMockup}
						description="CodeGPT.ninja on a Phone"
						className="image-chatgpt-phone"
						margin="40px"
					/>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
						<br />
						<br />
						Donec fermentum, nisl eget ultricies lacinia, nisl nisl aliquam
						nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl eget
						ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
						vel nisl.Donec fermentum, nisl eget ultricies lacinia, nisl nisl
						aliquam nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl
						eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl
						nunc vel nisl.Donec fermentum, nisl eget ultricies lacinia, nisl
						nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl.
					</Paragraph>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec
						fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
						ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
						lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
					</Paragraph>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec
						fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
						ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
						lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
					</Paragraph>
				</ProjectContent>
				<SubHeading>Architecture</SubHeading>
				<ProjectContent>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
						<br />
						<br />
						Donec fermentum, nisl eget ultricies lacinia, nisl nisl aliquam
						nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl eget
						ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
						vel nisl.
					</Paragraph>
					<AnimatedImage
						src={CodegptComponentDiagram}
						description="CodeGPT.ninja Figma component diagram"
						className="image-chatgpt-diagram"
						margin="40px"
					/>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec
						fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
						ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
						lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
					</Paragraph>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec
						fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
						ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
						lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
					</Paragraph>
				</ProjectContent>
			</ProjectContainer>
			<Seperator />
			<ProjectContainer>
				<div className="nav-target" id="E-Com">
					<Heading heading="E-Commerce">
						A basic E-commerce web application using Stripe. A basic E-commerce
						web application using Stripe. A basic E-commerce web application
						using Stripe.
					</Heading>
				</div>
				<SubHeading>Overview</SubHeading>
				<ProjectContent>
					<AnimatedImage
						src={CodegptGalaxyMockup}
						description="CodeGPT.ninja on a Galaxy S20"
						className="image-chatgpt-phone"
						margin="40px"
					/>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
						<br />
						<br />
						Donec fermentum, nisl eget ultricies lacinia, nisl nisl aliquam
						nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl eget
						ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
						vel nisl.Donec fermentum, nisl eget ultricies lacinia, nisl nisl
						aliquam nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl
						eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl
						nunc vel nisl.Donec fermentum, nisl eget ultricies lacinia, nisl
						nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl.
					</Paragraph>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec
						fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
						ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
						lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
					</Paragraph>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec
						fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
						ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
						lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
					</Paragraph>
				</ProjectContent>
				<SubHeading>Architecture</SubHeading>
				<ProjectContent>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
						<br />
						<br />
						Donec fermentum, nisl eget ultricies lacinia, nisl nisl aliquam
						nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl eget
						ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
						vel nisl.
					</Paragraph>
					<AnimatedImage
						src={CodegptComponentDiagram}
						description="CodeGPT.ninja Figma component diagram"
						className="image-chatgpt-diagram"
						margin="40px"
					/>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec
						fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
						ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
						lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
					</Paragraph>
					<Paragraph>
						CodeGPT.ninja is a web app that allows you to generate code using
						GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum,
						nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies
						nisl nunc vel nisl. Donec fermentum, nisl eget ultricies lacinia,
						nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl. Donec
						fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
						ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
						lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
					</Paragraph>
				</ProjectContent>
			</ProjectContainer>
		</Container>
	);
}
