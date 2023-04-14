import styled from "styled-components";
import { useState, useEffect } from "react";

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

export default function Navigator() {
	const [navTargets, setNavTargets] = useState<HTMLElement[]>([]);

	useEffect(() => {
		const navTargetsTemp = document.getElementsByClassName("nav-target");
		const navs = [] as HTMLElement[];

		for (let i = 0; i < navTargetsTemp.length; i++) {
			navs.push(navTargetsTemp[i] as HTMLElement);
		}
		setNavTargets(navs);
	}, []);

	return (
		<>
			{navTargets.map((target, i) => {
				const factor =
					(target.offsetTop + window.innerHeight) / document.body.scrollHeight;

				const ratio = Math.min(factor * 100, 100).toFixed(2);
				const top = `${ratio}%`;

				return (
					<NavigatorContainer
						key={i}
						style={{ top }}
						onPointerDown={() => target.scrollIntoView({ behavior: "smooth" })}
					>
						<NavigatorText>{target.id}</NavigatorText>
						<NavigatorDot />
					</NavigatorContainer>
				);
			})}
		</>
	);
}
