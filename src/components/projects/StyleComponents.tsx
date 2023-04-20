import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: var(--padded-width);
	max-width: var(--content-width);
	gap: 10px;
`;

export const Heading = styled.h1`
	margin-top: 40px;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const Paragraph = styled.p`
	flex: 1;
	margin: 5px;
	min-width: 50%;
`;

export const SubHeading = styled.h2`
	margin: 0;
	margin-top: 50px;
`;

export const Link = styled.a`
	font-size: medium;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	line-height: 1;

	p {
		margin: 0;
		line-height: 1;
	}
`;

export const LinkList = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 40px;
	width: var(--padded-width);
	max-width: var(--content-width);
`;
