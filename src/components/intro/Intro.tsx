import styled from "styled-components";
import portrait from "../../assets/portrait-reinhard-min.jpg";
import Paragraph from "./Paragraph";
import Quote from "./Quote";
import AnimatedImage from "../AnimatedImage";
import { BsTwitter, BsGithub } from "react-icons/bs";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: var(--padded-width);
	max-width: var(--content-width);
	margin-top: 40px;
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 40px;
`;

const Socials = styled(FlexRow)`
	margin: 40px;
`;

const SocialLink = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 4px;

	p {
		margin: 0;
		line-height: 1;
	}
`;

export default function Intro() {
	return (
		<Container className="nav-target" id="Intro">
			<FlexRow>
				<AnimatedImage
					src={portrait}
					description="Reinhard Zach, Renderivera"
					className="image-portrait"
				/>
				<Quote>
					As a highly passionate Full Stack Software Engineer with over 10 years
					of professional experience, I have had the privilege of developing
					solutions for renowned stakeholders like Bank of America, HBO,
					Starbucks, and BMW.
				</Quote>
			</FlexRow>
			<Socials>
				<SocialLink href="https://twitter.com/renderivera">
					<BsTwitter />
					<p>Twitter</p>
				</SocialLink>
				<SocialLink href="https://github.com/renderivera">
					<BsGithub />
					<p>Github</p>
				</SocialLink>
			</Socials>
			<FlexRow>
				<Paragraph heading="A Tale of Determination">
					I am a hard-working and quick learner who completed a computer science
					degree while working full-time as a developer.
				</Paragraph>
				<Paragraph heading="Skilled Engineer">
					I am a highly skilled Full Stack Software Engineer who is dedicated to
					delivering exceptional results and staying at the forefront of
					industry developments.
				</Paragraph>
				<Paragraph heading="Web Development Expertise">
					My experience in web development spans a variety of technologies,
					including React, Node.js, Javascript, Typescript, C#, Java, and
					Postgres.
				</Paragraph>
				<Paragraph heading="On Time, In Budget">
					I am skilled in developing and maintaining web applications and have a
					proven ability to deliver projects within budget and on time.
				</Paragraph>

				<Paragraph heading="Effective Communication">
					As a native German speaker and fluent in English, I am adept at
					communicating effectively with team members and stakeholders from
					diverse backgrounds.
				</Paragraph>
				<Paragraph heading="Problem-Solver">
					I possess strong problem-solving and communication skills, which have
					helped me navigate complex projects and successfully deliver results.
				</Paragraph>
				<Paragraph heading="Continuous Learning">
					I am committed to staying current with the latest industry trends and
					technologies, and I take pride in my ability to continuously learn and
					improve.
				</Paragraph>
			</FlexRow>
		</Container>
	);
}
