import styled from "styled-components"
import { ReactComponent as Remove } from "./icons/remove.svg"

interface ICon {
	isLink?: boolean
}

export const Container = styled("div")<ICon>`
	width: 100%;
	display: flex;
	max-width: 350px;
	min-height: 550px;
	padding: 24px 20px;
	border-radius: 18px;
	flex-direction: column;
	justify-content: space-between;
	transition: all 0.2s ease-in-out;
	background-color: var(--white);
	:hover {
		transform: scale(1.02);
	}
`

export const Header = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const HeaderLeft = styled("div")`
	gap: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const Type = styled("div")`
	gap: 5px;
	display: flex;

	span {
		font-size: 14px;
		font-weight: 400;
		line-height: 100%;
	}

	span.discount {
		font-size: 16px;
		font-weight: 400;
		line-height: 100%;
		position: relative;
		color: #ff2d55;

		::after {
			left: 0;
			height: 1px;
			width: 100%;
			bottom: 50%;
			content: "";
			position: absolute;
			transform: rotate(-30deg);
			background-color: #ff2d55;
		}
	}
`

export const Text = styled("p")`
	font-size: 14px;
	font-weight: 400;
	overflow: hidden;
	max-width: 310px;
	line-height: 139%;
	margin: 15px 0 25px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`

export const Ul = styled("ul")`
	gap: 20px;
	display: flex;
	padding: 18px 0 0 0;
	flex-direction: column;
	border-top: 1px solid #e8e8e8;

	li {
		gap: 8px;
		display: flex;
		align-items: center;

		span {
			font-size: 14px;
			font-weight: 500;
			line-height: 100%;
			color: #797979;
		}

		span.active {
			color: #393b3c;
		}
	}
`

export const IconRemove = styled(Remove)`
	path {
		fill: var(--red);
	}
`
