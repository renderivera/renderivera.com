import GalaxyMockup from "../../assets/ecommerce-galaxy-s20.webp";
import ComponentDiagram from "../../assets/ecommerce-components.webp";
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
			<Heading>Ecommerce Demo</Heading>
			<Paragraph>
				This Ecommerce website provides customers with a smooth and seamless
				shopping experience. The website uses modern web technologies and design
				principles to offer a user-friendly and efficient interface.
			</Paragraph>
			<Paragraph>
				The website is built using Typescript and React.js with the Vite build
				tool, providing a typesafe, fast and responsive user experience.
			</Paragraph>
			<LinkList>
				<Link href="https://shop-frontend-production-87aa.up.railway.app/">
					<BsGlobe />
					<p>Live</p>
				</Link>

				<Link href="https://github.com/renderivera/shop-frontend">
					<BsGithub />
					<p>Client</p>
				</Link>

				<Link href="https://github.com/renderivera/shop-backend">
					<BsGithub />
					<p>Server</p>
				</Link>
			</LinkList>

			<SubHeading>Description</SubHeading>
			<Content>
				<AnimatedImage
					src={GalaxyMockup}
					description="Ecom-Demo on a Phone"
					className="image-galaxy-s20"
				/>
				<Flex>
					<Paragraph>
						The application is optimized for SEO with relevant keywords and meta
						description. The client-side of the application has a Google
						PageSpeed score of 100. This ensures that the application is easily
						discoverable by search engines, making it more accessible to users.
					</Paragraph>
					<Paragraph>
						To ensure optimal security, the server is configured with SSL
						encryption, which encrypts the data sent between the client and the
						server.
					</Paragraph>
					<Paragraph>
						Performance is a key aspect of any modern website, and this project
						has been optimized for speed and efficiency. The website uses an
						http-server that supports Brotli and Gzip compression, which reduces
						the size of the files sent over the network, resulting in faster
						load times.
					</Paragraph>
				</Flex>
				<Paragraph>
					Client, Server and the Database are deployed on Railway.app, which
					provides continuous integration (CI) and seamless deployment. This
					means that any changes made to the production repository are
					automatically deployed to the server, ensuring that the application is
					always up-to-date.
				</Paragraph>
				<Paragraph>
					In summary, this Ecommerce website is a modern, performant, and
					feature-rich platform that provides customers with a seamless shopping
					experience. By utilizing modern web technologies and design
					principles, this project creates an application that is easy to use,
					maintain, and scale.
				</Paragraph>
			</Content>
			<SubHeading>Architecture</SubHeading>
			<Content>
				<Flex>
					<Paragraph>
						This project consists of 5 main components. Client, Server,
						Postgresql database, Google Firebase, and Stripe. The client
						requests products and categories from the server, which in turn
						requests the data from the SQL database, and returns it to the
						client.
					</Paragraph>
					<Paragraph>
						Both Client/Frontend and Server/Backend are written in Typescript to
						ensure typesafe development and increase security.
					</Paragraph>
					<Paragraph>
						User authentication is an essential feature of any Ecommerce
						website, and this project uses Firebase authentication to provide a
						secure and scalable authentication solution.
					</Paragraph>
					<Paragraph>
						Prisma is used for schema definition and Postgres database access,
						providing a type-safe way of interacting with the database.
						Additionally it is easy to make, manage, track schema migrations
						directly through the server repository.
					</Paragraph>
				</Flex>
				<AnimatedImage
					src={ComponentDiagram}
					description="Ecom-Demo Figma Diagram"
					className="image-ecom-diagram"
				/>

				<Paragraph>
					For payment processing, the Stripe API is utilized, which is a secure
					and reliable payment gateway. Redux Toolkit is used for state
					management, providing a set of powerful tools and best practices for
					managing state in a Redux application.
				</Paragraph>
				<Paragraph>
					Slices are utilized for managing cart and user data, providing a
					modular approach to reducers that makes them easier to use and
					maintain. The result is an optimized and efficient state management
					system that provides a seamless user experience.
				</Paragraph>
				<Paragraph>
					Redux Toolkit Query is used for backend communication and caching,
					providing an efficient way to communicate with the backend and cache
					responses.
				</Paragraph>
				<Paragraph>
					React Router Dom is used for handling client-side routing, making it
					easy to navigate between different pages of the shop.
				</Paragraph>
				<Paragraph>
					The website is styled using styled-components, which provides a unique
					way of writing CSS that makes it easier to write and maintain.
				</Paragraph>
			</Content>
		</Container>
	);
}
