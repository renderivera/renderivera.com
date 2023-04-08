import styled, { keyframes } from "styled-components";
import portrait_path from "./assets/portrait.png";
import Paragraph from "./Paragraph";
import Quote from "./Quote";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const H1 = styled.h1`
	font-weight: lighter;
`;

const Content = styled.div`
	max-width: 800px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 40px;
`;

const dropShadow = `drop-shadow(0.1px 0 0 ###) 
drop-shadow(0 0.1px 0 ###)
drop-shadow(-0.1px 0 0 ###) 
drop-shadow(0 -0.1px 0 ###)`;

const anima = keyframes`
	20% { filter: ${dropShadow.replace(/###/g, "var(--color-gradient1)")}}
	40% { filter: ${dropShadow.replace(/###/g, "var(--color-gradient2)")}}
	60% { filter: ${dropShadow.replace(/###/g, "var(--color-gradient3)")}}
	80% { filter: ${dropShadow.replace(/###/g, "var(--color-gradient4)")}}
	100% { filter: ${dropShadow.replace(/###/g, "var(--color-gradient5)")}}
`;

const Portrait = styled.img`
	max-width: 200px;
	margin: 10px;
	flex: 1;
	filter: ${dropShadow.replace(/###/g, "var(--color-text)")};
	animation: ${anima} var(--gradient-animation-duration) linear infinite
		alternate;
`;

export default function Intro({
	navTargetRef,
}: {
	navTargetRef: React.RefObject<HTMLDivElement | undefined>;
}) {
	return (
		<Container ref={navTargetRef as React.RefObject<HTMLDivElement>}>
			<Content>
				<Portrait src={portrait_path} />
				<Quote />
				<Paragraph heading="A Tale of Determination">
					I am a hard-working and quick learner who completed a computer science
					degree while working full-time as a developer, achieving a commendable
					3.5 GPA.
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
			</Content>
		</Container>
	);
}
