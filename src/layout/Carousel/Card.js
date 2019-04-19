import styled from 'styled-components'

const Card = styled.div`
	box-sizing: border-box;
	box-shadow: 0px 2px 8px #a6adb4;
	border-radius: 5px;

	margin-bottom: 40px;
`
const CardImage = styled.div`
	width: 100%;
	height: 180px;
	max-height: 180px;

	border-radius: 5px;
	background-color: #a6adb4;
`
const CardContent = styled.div`
	padding: 40px;
	max-width: 280px;
`
export { Card, CardImage, CardContent }
