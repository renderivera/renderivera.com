import CodegptGalaxyMockup from "../../assets/codegpt-Galaxy-S20-mockup-min.png";
import CodegptComponentDiagram from "../../assets/codegpt-component-diagram-min.png";
import AnimatedImage from "../AnimatedImage";
import {
	Container,
	Heading,
	LinkList,
	Link,
	Paragraph,
	Content,
	SubHeading,
} from "./StyleComponents";

import { BsGithub, BsGlobe } from "react-icons/bs";

export default function CodeGpt() {
	return (
		<Container>
			<Heading>CodeGPT.ninja</Heading>
			<Paragraph>
				CodeGPT.ninja is a web app that allows you to generate code using GPT-3.
				It is built using React, Next.js, and Tailwind CSS.
			</Paragraph>
			<LinkList>
				<Link href="https://codegpt.ninja">
					<BsGlobe />
					<p>Live</p>
				</Link>

				<Link href="https://codegpt.ninja">
					<BsGithub />
					<p>Client</p>
				</Link>

				<Link href="https://codegpt.ninja">
					<BsGithub />
					<p>Server</p>
				</Link>
			</LinkList>

			<SubHeading>Overview</SubHeading>
			<Content>
				<AnimatedImage
					src={CodegptGalaxyMockup}
					description="CodeGPT.ninja on a Phone"
					className="image-chatgpt-phone"
				/>
				<Paragraph>
					CodeGPT.ninja is a web app that allows you to generate code using
					GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl.
					<br />
					<br />
					Donec fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl,
					ut ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
					lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.Donec
					fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
					ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
					lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.Donec
					fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl, ut
					ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
					lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
				</Paragraph>
				<Paragraph>
					CodeGPT.ninja is a web app that allows you to generate code using
					GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl.
				</Paragraph>
				<Paragraph>
					CodeGPT.ninja is a web app that allows you to generate code using
					GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl.
				</Paragraph>
			</Content>
			<SubHeading>Architecture</SubHeading>
			<Content>
				<Paragraph>
					CodeGPT.ninja is a web app that allows you to generate code using
					GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl.
					<br />
					<br />
					Donec fermentum, nisl eget ultricies lacinia, nisl nisl aliquam nisl,
					ut ultricies nisl nunc vel nisl. Donec fermentum, nisl eget ultricies
					lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc vel nisl.
				</Paragraph>
				<AnimatedImage
					src={CodegptComponentDiagram}
					description="CodeGPT.ninja Figma Diagram"
					className="image-chatgpt-diagram"
				/>
				<Paragraph>
					CodeGPT.ninja is a web app that allows you to generate code using
					GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl.
				</Paragraph>
				<Paragraph>
					CodeGPT.ninja is a web app that allows you to generate code using
					GPT-3. It is built using React, Next.js, and Tailwind CSS. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl. Donec fermentum, nisl
					eget ultricies lacinia, nisl nisl aliquam nisl, ut ultricies nisl nunc
					vel nisl. Donec fermentum, nisl eget ultricies lacinia, nisl nisl
					aliquam nisl, ut ultricies nisl nunc vel nisl.
				</Paragraph>
			</Content>
		</Container>
	);
}
