import styled from "styled-components";
import { useState, useEffect } from "react";
import Progress from "./Progress";
import { navType } from "../../types/navType";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Container = styled.div`
	height: 100vh;
	width: 10%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 100;
`;

const NavigatorDot = styled.div<{ passed: boolean }>`
	line-height: 1;
	border-radius: var(--border-radius);
	display: flex;
	align-items: center;
	justify-content: center;

	font-size: var(--navigator-icon-size);

	transition: all 0.5s ease-in-out;

	background-color: ${({ passed }) =>
		passed
			? "var(--menu-background-color-passed)"
			: "var(--menu-background-color)"};
	color: ${({ passed }) =>
		passed ? "var(--menu-text-color-passed)" : "var(--menu-text-color)"};
	box-shadow: ${({ passed }) =>
		passed ? "var(--navigator-box-shadow-passed)" : "none"};
`;

const NavigatorText = styled.p`
	font-size: small;

	background-color: var(--menu-background-color);
	color: var(--menu-text-color);

	box-shadow: var(--navigator-box-shadow);

	transition: all 0.5s ease-in-out;
	font-size: var(--navigator-icon-size);
	padding: 0 5px;
	margin: 0;
	line-height: 1;
	transform-origin: top right;
	text-align: right;
	position: absolute;
	height: var(--navigator-height);
	right: calc(var(--navigator-width) - 1px);
	user-select: none;
	border-radius: var(--border-radius);

	display: flex;
	align-items: center;
	justify-content: center;
`;

const NavigatorContainer = styled.div<{ menuOpen: boolean; top: string }>`
	position: fixed;
	top: ${({ top }) => top};
	right: 0;
	z-index: 220;

	transform: translateY(calc(-1 * (var(--navigator-height))));
	transition: all 0.5s ease-in-out;

	cursor: pointer;

	${({ menuOpen }) =>
		menuOpen
			? ""
			: "--navigator-height: var(--navigator-height-collapsed); " +
			  "--navigator-width: var(--navigator-width-collapsed); " +
			  "--navigator-box-shadow-passed: var(--navigator-box-shadow-passed-collapsed); "}

	${NavigatorDot} {
		height: var(--navigator-height);
		width: var(--navigator-width);
	}

	${NavigatorText} {
		transform: ${({ menuOpen }) =>
			menuOpen ? "rotateY(0deg); " : "rotateY(90deg); "};
	}

	svg {
		position: absolute;

		transform: ${({ menuOpen }) =>
			menuOpen ? "rotateY(0deg); " : "rotateY(90deg); "};
		transition: transform 0.5s ease-in-out;
	}
`;

const Menu = styled.div`
	position: fixed;
	color: var(--menu-text-color);
	background-color: var(--menu-background-color);
	border-radius: var(--border-radius) 0 0 var(--border-radius);
	top: 0;
	right: 0;
	height: 40px;
	width: 40px;
	font-size: 30px;
	line-height: 1;
	box-shadow: var(--navigator-box-shadow);
	z-index: 150;
	cursor: pointer;
`;

const MenuIcon = styled.div<{ show: boolean }>`
	transition: all 0.5s ease-in-out;
	transform-origin: center;
	opacity: ${({ show }) => (show ? "1" : "0")};
	position: absolute;
	top: 5px;
	right: 5px;
`;

export default function ScrollBar({ navs }: { navs: navType[] }) {
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [totalHeight, setTotalHeight] = useState(document.body.scrollHeight);
	const [menuOpen, setMenuOpen] = useState(false);
	const [passedNavs, setPassedNavs] = useState(navs.map(() => false));

	useEffect(() => {
		const handleResize = () => {
			setWindowHeight(window.innerHeight);
			setTotalHeight(document.body.scrollHeight);
		};

		handleResize();

		window.onresize = handleResize;
		document.onresize = handleResize;
	}, []);

	return (
		<Container>
			<Menu onPointerDown={() => setMenuOpen(!menuOpen)}>
				<MenuIcon show={!menuOpen}>
					<BsEye />
				</MenuIcon>
				<MenuIcon show={menuOpen}>
					<BsEyeSlash />
				</MenuIcon>
			</Menu>
			<div>
				{navs.map((target, i) => {
					const ref = target.element.current;
					if (!ref) return null;

					const ratio = Math.min(
						(ref.offsetTop + windowHeight) / totalHeight,
						1
					);

					const percent = (ratio * 100).toFixed(2);
					const top = `${percent}%`;

					target.position = ratio;

					return (
						<NavigatorContainer
							key={i}
							menuOpen={menuOpen}
							top={top}
							onPointerDown={() => ref.scrollIntoView({ behavior: "smooth" })}
						>
							<NavigatorText>{target.name}</NavigatorText>
							<NavigatorDot passed={passedNavs[i]}>{target.icon}</NavigatorDot>
						</NavigatorContainer>
					);
				})}
			</div>
			<Progress
				windowHeight={windowHeight}
				totalHeight={totalHeight}
				navs={navs}
				passedNavs={passedNavs}
				setPassedNavs={setPassedNavs}
			/>
		</Container>
	);
}
