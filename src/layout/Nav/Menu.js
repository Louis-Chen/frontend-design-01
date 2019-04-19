import React from 'react'
import ReactSVG from 'react-svg'

import styled from 'styled-components'

import { Text } from '../../components/Text'
import Avatar from '../../assets/svg/avatar.svg'

const Nav = styled.div`
	background-color: #f6f8f9;

	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100vw;
	height: 50px;
`

const Logo = styled.div`
	padding-left: 20px;
	padding-right: 20px;
`
const Menu = styled.div`
	float: right;

	display: flex;
	align-items: center;
	justify-content: space-between;
`

const MenuItem = styled.a`
	box-sizing: border-box; 

	color: ${props => (props.color ? props.color : '#202124')};

	padding-left:10px;
	padding-right:10px;

	font-family: 'Helvetica';
	font-size: ${props => (props.size ? props.size : '24px')};
	font-weight: bold;
	font-style: ${props => props.fontStyle};
    


  &:after {
		content: '${props => props.content}';
	}
`
const Navagation = () => {
	return (
		<Nav>
			<Logo>
				<Text size="13px" color="#FA6980" content="LOGO" />
			</Logo>

			<Menu>
				<MenuItem color="#A6ADB4" size="11px" content="HOME" />
				<MenuItem color="#A6ADB4" size="11px" content="DISCOVERY" />
				<MenuItem color="#A6ADB4" size="11px" content="PHOTOS" />
				<MenuItem color="#A6ADB4" size="11px" content="CONTACT" />
				<Logo>
					<ReactSVG src={Avatar} />
				</Logo>
			</Menu>
		</Nav>
	)
}

export default Navagation
