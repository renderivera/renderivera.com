import styled from "styled-components";
import { BsEnvelope, BsTwitter, BsGithub } from "react-icons/bs";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 40px;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}
`;

export default function Contact() {
	return (
		<Container>
			<h1>Contact</h1>
			<Content>
				<a href="mailto:reinhard.zach@gmail.com">
					<BsEnvelope />
					Email
				</a>
				<a href="https://github.com/renderivera">
					<BsGithub />
					Github
				</a>
				<a href="https://twitter.com/renderivera">
					<BsTwitter />
					Twitter
				</a>
			</Content>
		</Container>
	);
}
