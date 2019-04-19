import styled from 'styled-components'

const BigCard = styled.div`
	background-color: #a6adb4;
	background-image: url('https://images.unsplash.com/photo-1553708843-c500c49da172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80');
	box-sizing: border-box;
	box-shadow: 0px 2px 8px #a6adb4;
	border-radius: 5px;

	width: 100%;
	height: 430px;

	border-radius: 5px;
	background-color: #a6adb4;

	position: relative;

	margin-bottom:40px;
`

const BigCardTitle = styled.div`
	position: absolute;

	left: 40px;
	top: 40px;
`


const BigCardContent = styled.div`
	position: absolute;

	left: 40px;
	bottom: 40px;
`

export { BigCard, BigCardContent,BigCardTitle }
