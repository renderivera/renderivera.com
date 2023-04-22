import styled from "styled-components";
import seperatorTop from "../assets/waves/seperator-top.svg";

const Container = styled.div`
	width: var(--absolute-width);
	height: 300px;
	position: relative;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;
const Wave = styled.img`
	margin-top: auto;
	min-width: var(--min-wave-width);
`;

const Text = styled.div`
	position: absolute;
	bottom: 0;

	text-align: center;
	width: 100%;
`;

export default function Footer() {
	return (
		<Container className="nav-target" id="End">
			<Text>© 2023 Renderivera</Text>
			<Wave src={seperatorTop} alt="wave background" />
		</Container>
	);
}
