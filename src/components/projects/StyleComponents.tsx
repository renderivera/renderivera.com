import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: var(--absolute-width);
	max-width: var(--content-width);
	gap: 10px;
`;

export const Heading = styled.h1`
	margin-top: 0;
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

export const SubHeading = styled.h3`
	margin: 0;
	margin-top: 50px;
`;

export const Link = styled.a``;

export const LinkList = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: var(--absolute-width);
	max-width: var(--content-width);
`;
