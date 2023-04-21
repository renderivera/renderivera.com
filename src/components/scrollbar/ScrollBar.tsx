import styled from "styled-components";
import { useState, useEffect } from "react";
import Progress from "./Progress";
import { navType } from "../../types/navType";
import { VscMenu, VscClose } from "react-icons/vsc";
import { BsGripVertical } from "react-icons/bs";

const Container = styled.div`
	height: 100vh;
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

	transition: var(--transition-default);

	background-color: ${({ passed }) =>
		passed
			? "var(--menu-background-color-passed)"
			: "var(--menu-background-color)"};
	color: ${({ passed }) =>
		passed ? "var(--menu-text-color-passed)" : "var(--menu-text-color)"};
	box-shadow: ${({ passed }) =>
		passed
			? "var(--navigator-box-shadow-passed)"
			: "var(--navigator-box-shadow)"};
`;

const NavigatorText = styled.p`
	font-size: small;

	background-color: var(--menu-background-color);
	color: var(--menu-text-color);

	box-shadow: var(--navigator-box-shadow);

	transition: var(--transition-default);
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

const NavigatorIconCollapsed = styled.div`
	display: flex;

	align-items: center;
	justify-content: center;
	transition: all 0.5s ease-in-out;
	transform: translateX(1px);
`;

const NavigatorIconOpen = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform 0.5s ease-in-out;
`;

const NavigatorContainer = styled.div<{ menuOpen: boolean; top: string }>`
	position: fixed;
	top: ${({ top }) => top};
	right: 1px;
	z-index: 220;

	transform: translateY(calc(-1 * (var(--navigator-height))));
	transition: transform 0.5s ease-in-out;

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
			menuOpen ? "rotateY(0deg)" : "rotateY(90deg)"};
	}

	${NavigatorIconOpen} {
		transform: ${({ menuOpen }) =>
			menuOpen ? "rotateY(0deg)" : "rotateY(90deg)"};
	}

	${NavigatorIconCollapsed} {
		opacity: ${({ menuOpen }) => (!menuOpen ? "1 " : "0 ")};
	}
`;

const MenuIcon = styled.div<{ show: boolean }>`
	transition: var(--transition-default);
	transform-origin: center;

	transform: ${({ show }) => (show ? "scale(1); " : "scale(0); ")};

	position: absolute;
	top: 5px;
	right: 5px;
	line-height: 1;
`;

const Menu = styled.div`
	position: fixed;
	color: var(--menu-text-color);
	background-color: var(--menu-background-color);
	border-radius: var(--border-radius);
	top: 0px;
	right: 1px;
	height: var(--menu-size);
	width: var(--menu-size);
	font-size: var(--menu-font-size);

	z-index: 150;
	cursor: pointer;
	transition: var(--transition-default);
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
					<VscMenu />
				</MenuIcon>
				<MenuIcon show={menuOpen}>
					<VscClose />
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
							<NavigatorDot passed={passedNavs[i]}>
								<NavigatorIconOpen>{target.icon}</NavigatorIconOpen>
								<NavigatorIconCollapsed>
									<BsGripVertical />
								</NavigatorIconCollapsed>
							</NavigatorDot>
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
