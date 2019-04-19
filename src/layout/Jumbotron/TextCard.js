import styled from 'styled-components'

const TextCard = styled.div`
	background-color: #ffffff;

	display: flex;
	/* align-items: center; */
	justify-content: center;

	float: left;

	max-width: 580px;
	max-height: 600px;

	height: 600px;

	@media (min-width: 1200px) {
		min-width: 540px;

		height: 600px;
	}
`

const TextContent = styled.div`
	@media (min-width: 1200px) {
		padding-top: 50px;
		width: 420px;
	}
`

export { TextCard, TextContent }
