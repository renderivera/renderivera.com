import styled from "styled-components";
import Progress from "./Progress";
import Navigator from "./Navigator";

const Container = styled.div`
	height: 100vh;
	width: 10%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 100;
`;

export default function ScrollBar() {
	return (
		<Container>
			<Progress />
			<Navigator />
		</Container>
	);
}
