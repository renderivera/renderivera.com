import styled from "styled-components";
import { useState, useEffect } from "react";

const thumbHeight = 50;
const scrollBarWidth = 10;

const ThumbRectangle = styled.div`
	height: ${thumbHeight}px;
	width: ${scrollBarWidth}px;
	background-color: var(--color-text);
	transition: all 0.2s ease-in-out;
	opacity: 0.8;
`;

const ThumbText = styled.p`
	font-size: small;
	background-color: var(--color-background);
	margin: 0;
	padding: 1px 2px 2px 2px;
	line-height: 1;
	opacity: 0;
	transition: all 0.2s ease-in-out;
	user-select: none;
`;
const Container = styled.div`
	height: ${thumbHeight}px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 110;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		${ThumbText} {
			opacity: 1;
		}
		${ThumbRectangle} {
			opacity: 1;
		}
	}
`;

export default function Thumb() {
	const [scrollPosition, setScrollPosition] = useState({
		px: 0,
		percent: 0,
	});

	useEffect(() => {
		const handleScroll = () => {
			const screenHeight = window.innerHeight;
			const scrollY = window.scrollY;
			const totalHeight = document.body.scrollHeight;

			const ratio = scrollY / (totalHeight - screenHeight);

			const px = Math.round(ratio * screenHeight - ratio * thumbHeight);
			const percent = Math.round(ratio * 100);

			setScrollPosition({ px, percent });
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<Container style={{ top: scrollPosition.px }}>
			<ThumbText>{scrollPosition.percent}%</ThumbText>
			<ThumbRectangle />
		</Container>
	);
}
