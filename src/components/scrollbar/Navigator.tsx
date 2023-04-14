import styled from "styled-components";
import NavTarget from "../../types/NavTarget";
import { RefObject, useState, useEffect } from "react";

const Container = styled.div``;

const NavigatorDot = styled.div`
	height: 20px;
	width: 20px;

	border-radius: 50%;
	background-color: var(--color-text);
	opacity: 0.75;

	transition: all 0.5s ease-in-out;
`;

const NavigatorText = styled.p`
	font-size: small;
	background-color: var(--color-background);
	padding: 1px 2px 2px 2px;
	font-size: 15px;
	margin: 0;
	line-height: 1;
	opacity: 0;
	transition: all 0.5s ease-in-out;
	user-select: none;
`;

const NavigatorContainer = styled.div`
	mix-blend-mode: difference;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 120;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	transform-origin: top;
	transform: translateY(-20px);

	&:hover {
		${NavigatorDot} {
			opacity: 1;
		}
		${NavigatorText} {
			opacity: 1;
		}
	}
`;

export default function Navigator({ navTargets }: { navTargets: NavTarget[] }) {
	return (
		<Container>
			{navTargets.map((target, i) => {
				console.log(target.ref.current);

				if (!target.ref.current) return;

				const factor =
					(target.ref.current.offsetTop + window.innerHeight) /
					document.body.scrollHeight;

				const ratio = Math.min(factor * 100, 100).toFixed(2);
				const top = `${ratio}%`;

				return (
					<NavigatorContainer
						key={i}
						style={{ top }}
						onPointerDown={() =>
							target.ref.current?.scrollIntoView({ behavior: "smooth" })
						}
					>
						<NavigatorText>{target.title}</NavigatorText>
						<NavigatorDot />
					</NavigatorContainer>
				);
			})}
		</Container>
	);
}
