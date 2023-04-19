import styled from "styled-components";
import portrait from "../assets/portrait-reinhard-min.jpg";
import Heading from "./Heading";
import Quote from "./Quote";
import AnimatedImage from "./AnimatedImage";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: var(--absolute-width);
	max-width: var(--content-width);
`;

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 40px;
`;

export default function Intro() {
	return (
		<Container className="nav-target" id="Intro">
			<Content>
				<AnimatedImage
					src={portrait}
					description="Reinhard Zach, Renderivera"
					className="image-portrait"
				/>
				<Quote />
				<Heading heading="A Tale of Determination">
					I am a hard-working and quick learner who completed a computer science
					degree while working full-time as a developer, achieving a commendable
					3.5 GPA.
				</Heading>
				<Heading heading="Skilled Engineer">
					I am a highly skilled Full Stack Software Engineer who is dedicated to
					delivering exceptional results and staying at the forefront of
					industry developments.
				</Heading>
				<Heading heading="Web Development Expertise">
					My experience in web development spans a variety of technologies,
					including React, Node.js, Javascript, Typescript, C#, Java, and
					Postgres.
				</Heading>
				<Heading heading="On Time, In Budget">
					I am skilled in developing and maintaining web applications and have a
					proven ability to deliver projects within budget and on time.
				</Heading>

				<Heading heading="Effective Communication">
					As a native German speaker and fluent in English, I am adept at
					communicating effectively with team members and stakeholders from
					diverse backgrounds.
				</Heading>
				<Heading heading="Problem-Solver">
					I possess strong problem-solving and communication skills, which have
					helped me navigate complex projects and successfully deliver results.
				</Heading>

				<Heading heading="Continuous Learning">
					I am committed to staying current with the latest industry trends and
					technologies, and I take pride in my ability to continuously learn and
					improve.
				</Heading>
			</Content>
		</Container>
	);
}
