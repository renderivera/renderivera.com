import CodegptGalaxyMockup from "../../assets/codegpt-Galaxy-S20-mockup-min.webp";
import CodegptComponentDiagram from "../../assets/codegpt-component-diagram-min.webp";
import AnimatedImage from "../AnimatedImage";
import {
	Container,
	Heading,
	LinkList,
	Link,
	Paragraph,
	Content,
	SubHeading,
	Flex,
} from "./StyleComponents";

import { BsGithub, BsGlobe } from "react-icons/bs";

export default function CodeGpt() {
	return (
		<Container>
			<Heading>Ecommerce</Heading>
			<Paragraph>
				CodeGPT.ninja is a web-based platform that enables users to write and
				explain code with the help of an advanced artificial intelligence
				language model.
			</Paragraph>
			<Paragraph>
				The application is built using modern web development tools and
				technologies to deliver a user-friendly and efficient experience.
			</Paragraph>
			<LinkList>
				<Link href="https://codegpt.ninja">
					<BsGlobe />
					<p>Live</p>
				</Link>

				<Link href="https://github.com/renderivera/codegptninja-frontend">
					<BsGithub />
					<p>Client</p>
				</Link>

				<Link href="https://github.com/renderivera/codegptninja-backend">
					<BsGithub />
					<p>Server</p>
				</Link>
			</LinkList>

			<SubHeading>Description</SubHeading>
			<Content>
				<AnimatedImage
					src={CodegptGalaxyMockup}
					description="CodeGPT.ninja on a Phone"
					className="image-chatgpt-phone"
				/>
				<Flex>
					<Paragraph>
						On the client-side, the application is built with React.js and
						Vanilla Javascript. React.js is a popular and widely used JavaScript
						library that provides a modular approach to building user
						interfaces.
					</Paragraph>
					<Paragraph>
						To provide users with an intuitive interface, the application has
						two main pages: write and explain code. The pages are routed using
						React Router DOM, which helps in rendering the correct components
						based on the URL.
					</Paragraph>
					<Paragraph>
						Users can select their desired programming language, which is saved
						in the application state using Redux slices. This makes it easy to
						switch between pages while maintaining the selected programming
						language. The syntax highlighting feature is achieved using prismjs
						and react-simple-code-editor, which provide an elegant way to
						display the code.
					</Paragraph>
				</Flex>
				<Paragraph>
					The application is optimized for SEO with relevant keywords and
					metadescription. The client-side of the application has a Google
					PageSpeed score of 100. This ensures that the application is easily
					discoverable by search engines, making it more accessible to users.
				</Paragraph>
				<Paragraph>
					The application is deployed on Railway.app, which provides continuous
					integration (CI) and seamless deployment to the server. This means
					that any changes made to the production repository are automatically
					deployed to the server, ensuring that the application is always
					up-to-date.
				</Paragraph>
				<Paragraph>
					CodeGPT.ninja is built with Vite, which is a fast and efficient build
					tool for modern web development. CodeGPT.ninja also features
					end-to-end testing with vitest, which helps in identifying potential
					bugs or issues in the code. This ensures that the application is
					always running smoothly and any issues are caught early on in the
					development process.
				</Paragraph>
				<Paragraph>
					To ensure optimal security, the server is configured with SSL
					encryption, which encrypts the data sent between the client and the
					server.
				</Paragraph>
				<Paragraph>
					In summary, CodeGPT.ninja is a robust and efficient application that
					leverages advanced AI technology to provide users with an intuitive
					and user-friendly platform to write and explain code. The use of
					modern web development tools and technologies ensures that the
					application is fast, responsive, and easily accessible to users.
				</Paragraph>
			</Content>
			<SubHeading>Architecture</SubHeading>
			<Content>
				<Flex>
					<Paragraph>
						The architecture of CodeGPT.ninja consists of a frontend/client and
						a backend/server. The client sends the user's code to the server,
						which in turn sends the code to the OpenAI API. The API returns the
						code to the server, which is then sent back to the client.
					</Paragraph>
					<Paragraph>
						CodeGPT.ninja uses the OpenAI API's text-davinci-003 model to
						generate and explain code. This AI model is capable of natural
						language processing and is trained to respond to prompts in a
						human-like manner. By leveraging this AI model, CodeGPT.ninja can
						provide an advanced and intelligent way for users to write and
						explain code.
					</Paragraph>
				</Flex>
				<AnimatedImage
					src={CodegptComponentDiagram}
					description="CodeGPT.ninja Figma Diagram"
					className="image-chatgpt-diagram"
				/>
				<Paragraph>
					To ensure a smooth and seamless user experience, the application uses
					Redux Toolkit for state management. Redux Toolkit is a powerful tool
					that helps in organizing and managing the application state, making it
					easier to debug and test the code.
				</Paragraph>
				<Paragraph>
					Additionally, Redux Toolkit Query is used to manage server/backend
					access and result caching, which optimizes the performance of the
					application.
				</Paragraph>
				<Paragraph>
					The backend/server is built using Express.js and uses the OpenAI API
					to generate and explain code. The application's secret key is stored
					in an environment variable to ensure its security. The backend/server
					is configured with CORS policy to restrict API access to the
					frontend/client only, avoiding any potential misuse.
				</Paragraph>
				<Paragraph>
					In summary, the architecture of CodeGPT.ninja is a typical
					client-server architecture, where the frontend and backend are built
					using different technologies to achieve their respective
					responsibilities. The backend communicates with the OpenAI API to
					generate code and provides the necessary data to the frontend to
					display the output to the user.
				</Paragraph>
			</Content>
		</Container>
	);
}
