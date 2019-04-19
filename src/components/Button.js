import styled from 'styled-components'

export const Button = styled.button`
	border: none;
	border-radius: 8px;

	font-family: 'Helvetica';
	font-size: 11px;
	font-weight: bold;

	width: 152px;
	height: 40px;

	${props =>
		props.primary &&
		`	
	background: #fa6980;
	color: #ffffff;
	`}

	${props =>
		props.dafault &&
		`
			border: solid;
	border-width: 2px;
	border-color: #fa6980;

	color: #fa6980;
	`}

	&:after{
		content:'${props => props.content}';
	}
`
