import styled from "styled-components";
import { useState, useEffect } from "react";
import { navType } from "../../types/navType";

const ThumbRectangle = styled.div`
	width: var(--progress-bar-width);
	background-color: var(--color-text);
	box-shadow: var(--navigator-box-shadow);

	border-radius: var(--border-radius);

	position: fixed;
	top: 0;
	right: 0;
	z-index: 110;
`;

const scrollRerenderFactor = 0.05;

export default function Progress({
	windowHeight,
	documentHeight,
	navs,
	passedNavs,
	setPassedNavs,
}: {
	windowHeight: number;
	documentHeight: number;
	navs: navType[];
	passedNavs: boolean[];
	setPassedNavs: React.Dispatch<React.SetStateAction<boolean[]>>;
}) {
	const [scrollY, setScrollY] = useState(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			const y =
				Math.round(window.scrollY * scrollRerenderFactor) /
				scrollRerenderFactor;
			if (y !== scrollY) {
				setScrollY(y);
			}
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollY]);

	const ratio = (scrollY + windowHeight) / documentHeight;
	const percent = (ratio * 100).toFixed(2);
	const scrollPosition = `${percent}%`;

	useEffect(() => {
		if (!windowHeight || !documentHeight) return;

		let update = false;

		const passedNavsTemp = navs.map((nav, i) => {
			const pass = nav.position <= ratio + 0.005;

			if (pass != passedNavs[i]) update = true;

			return pass;
		});

		if (update) setPassedNavs(passedNavsTemp);
	}, [scrollY]);

	return <ThumbRectangle style={{ height: scrollPosition }} />;
}
