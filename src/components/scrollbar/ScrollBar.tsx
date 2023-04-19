import styled from "styled-components";
import { useState, useEffect } from "react";
import Progress from "./Progress";
import { GrMenu } from "react-icons/gr";
import { TfiClose } from "react-icons/tfi";
import { navType } from "../../types/navType";

const Container = styled.div`
	height: 100vh;
	width: 10%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 100;
`;

const NavigatorDot = styled.div<{ passed: boolean }>`
	height: var(--navigator-size);
	width: var(--navigator-size);

	transition: all 0.5s ease-in-out;
	position: absolute;
	top: 0;
	right: 0;

	font-size: var(--navigator-icon-size);
	line-height: 1;
	border-radius: var(--border-radius);
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ passed }) =>
		passed
			? "var(--menu-background-color-passed)"
			: "var(--menu-background-color)"};
	color: ${({ passed }) =>
		passed ? "var(--menu-text-color-passed)" : "var(--menu-text-color)"};

	box-shadow: var(--navigator-box-shadow);
`;

const NavigatorText = styled.p`
	font-size: small;

	background-color: var(--menu-background-color);
	color: var(--menu-text-color);

	box-shadow: var(--navigator-box-shadow);

	transition: all 0.25s ease-in-out;
	font-size: var(--navigator-icon-size);
	padding: 0 5px;
	margin: 0;
	line-height: 1;
	transform-origin: top right;
	text-align: right;
	position: absolute;
	height: var(--navigator-size);
	right: var(--navigator-size);
	user-select: none;
	border-radius: var(--border-radius);
`;

const NavigatorContainer = styled.div<{ menuOpen: boolean; top: string }>`
	position: fixed;
	top: ${({ top }) => top};
	right: 0;
	z-index: 120;
	transform-origin: top;

	transform: ${({ menuOpen }) => (menuOpen ? "scale(1) " : "scale(0.1) ")}
		translateY(calc(-1 * (var(--navigator-size))));

	transition: transform 0.4s ease-in-out;

	cursor: pointer;

	${NavigatorText} {
		opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
		transform: ${({ menuOpen }) =>
			menuOpen ? "rotateY(0deg)" : "rotateY(90deg)"};
	}

	svg {
		opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
		transition: opacity 0.25s ease-in-out;
	}
`;

const Menu = styled.div`
	position: fixed;
	color: var(--menu-text-color);
	background-color: var(--menu-background-color);
	border-radius: var(--border-radius) 0 0 var(--border-radius);
	top: 0;
	right: 0;
	height: 50px;
	width: 50px;
	font-size: 40px;
	line-height: 1;
	box-shadow: var(--navigator-box-shadow);
	z-index: 150;
	cursor: pointer;
`;

const MenuIcon = styled.div<{ show: boolean }>`
	transition: all 0.5s ease-in-out;
	transform-origin: center;
	transform: ${({ show }) => (show ? "rotateY(0deg)" : "rotateY(90deg)")};

	position: absolute;
	top: 5px;
	right: 5px;
`;

export default function ScrollBar({ navs }: { navs: navType[] }) {
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [documentHeight, setDocumentHeight] = useState(
		document.body.scrollHeight
	);
	const [menuOpen, setMenuOpen] = useState(false);
	const [passedNavs, setPassedNavs] = useState(navs.map(() => false));

	useEffect(() => {
		const handleResize = () => {
			setWindowHeight(window.innerHeight);
			setDocumentHeight(document.body.scrollHeight);
		};

		handleResize();

		window.onresize = handleResize;
		document.onresize = handleResize;
	}, []);

	const menuPointStyle =
		(menuOpen ? "scale(1)" : "scale(0.2)") +
		" translateY(calc(-1 * var(--navigator-size))";

	return (
		<Container>
			<Menu aria-label="menu" onPointerDown={() => setMenuOpen(!menuOpen)}>
				<MenuIcon show={!menuOpen}>
					<GrMenu />
				</MenuIcon>
				<MenuIcon show={menuOpen}>
					<TfiClose />
				</MenuIcon>
			</Menu>
			<div>
				{navs.map((target, i) => {
					const ref = target.element.current;
					if (!ref) return null;

					const ratio = Math.min(
						(ref.offsetTop + windowHeight) / documentHeight,
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
				documentHeight={documentHeight}
				navs={navs}
				passedNavs={passedNavs}
				setPassedNavs={setPassedNavs}
			/>
		</Container>
	);
}
