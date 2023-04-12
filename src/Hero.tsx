import styled, { keyframes } from "styled-components";
import { BsChevronDown } from "react-icons/bs";

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	width: calc(100vw - 20px);
	height: 100vh;
	font-family: monospace;
	white-space: pre;

	@media (max-width: 768px) {
		width: 100vw;
	}
`;

const Logo = styled.div`
	position: absolute;
	font-size: 10px;
	display: flex;
	flex-wrap: wrap;
	width: 470px;
	align-items: center;
	justify-content: center;
	padding: 10px;
	line-height: 1.1;
	background-color: var(--color-background);

	@media (max-width: 768px) {
		font-size: 6px;
		width: 281px;
	}
`;

const Bg = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 60px;
`;

const Line = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: 11px;
`;
const colorChange = keyframes`
	20% {color: var(--color-gradient1)}
	40% {color: var(--color-gradient2)}
	60% {color: var(--color-gradient3)}
	80% {color: var(--color-gradient4)}
	100% {color: var(--color-gradient5)}
`;

const bounce = keyframes`
	100% {transform: translateY(-15px);}
`;
const Navigator = styled.div`
	display: flex;
	margin-top: auto;
	margin-bottom: 10px;
	flex-direction: row;
	flex-wrap: wrap;
	width: 42px;
	line-height: 1.25;
	font-size: 25px;
	cursor: pointer;
	animation: ${colorChange} var(--gradient-animation-duration) linear infinite
			alternate,
		${bounce} 2s ease-in-out infinite alternate;
`;

const Char = styled.div`
	animation: ${colorChange} var(--gradient-animation-duration) linear infinite
		alternate;
`;

const asciiLogo = `
██████╗ ███████╗███╗  ██╗██████╗ ███████╗██████╗ ██╗██╗   ██╗███████╗██████╗  █████╗ 
██╔══██╗██╔════╝████╗ ██║██╔══██╗██╔════╝██╔══██╗██║██║   ██║██╔════╝██╔══██╗██╔══██╗
██████╔╝█████╗  ██╔██╗██║██║  ██║█████╗  ██████╔╝██║╚██╗ ██╔╝█████╗  ██████╔╝███████║
██╔══██╗██╔══╝  ██║╚████║██║  ██║██╔══╝  ██╔══██╗██║ ╚████╔╝ ██╔══╝  ██╔══██╗██╔══██║
██║  ██║███████╗██║ ╚███║██████╔╝███████╗██║  ██║██║  ╚██╔╝  ███████╗██║  ██║██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚══╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`;
const asciiLogoChunks = asciiLogo.match(/.{1,5}/g) || [];

export default function Hero({
	navTargetRef,
}: {
	navTargetRef: React.RefObject<HTMLDivElement | undefined>;
}) {
	return (
		<Container>
			<Logo>
				{asciiLogoChunks.map((v, i) => (
					<Char
						key={i}
						ref={(r) => {
							if (!r) return;
							const o = (r.offsetLeft + r.offsetTop) * 10;
							r.style.setProperty("animation-delay", o + "ms");
						}}
					>
						{v}
					</Char>
				))}
			</Logo>
			<Bg>
				{[...Array(8)].map((_, i) => (
					<Line key={i}>
						{[...Array(10)].map((_, j) => (
							<Char
								key={j}
								ref={(r) => {
									if (!r) return;
									const o = (r.offsetLeft + r.offsetTop) * 2;
									r.style.setProperty("animation-delay", o + "ms");
								}}
							>
								════════════════════════════════════
							</Char>
						))}
					</Line>
				))}
			</Bg>
			<Navigator
				onClick={() =>
					navTargetRef.current?.scrollIntoView({ behavior: "smooth" })
				}
			>
				<BsChevronDown />
			</Navigator>
		</Container>
	);
}

/*

*/
