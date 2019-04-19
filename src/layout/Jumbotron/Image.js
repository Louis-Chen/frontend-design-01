import styled from 'styled-components'

const LandImage = styled.div`
	background-color: #a6adb4;
	background-image: url('http://bit.ly/2vcNBik');
	background-repeat: no-repeat, repeat;
	background-size: cover;
	background-position: center;
	
	display: flex;
	align-items: center;
	justify-content: center;

	float: left;
	max-width: 100vw;
	max-height: 600px;

	height: 600px;
	width: 1200px;
`
const LandContent = styled.div`
	box-sizing: border-box;

	@media (min-width: 980px) {
		max-height: 242px;
		max-width: 608px;

		width: 608px;
		height: auto;
	}
`
export { LandImage, LandContent }
