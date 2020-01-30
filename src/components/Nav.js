import React from 'react'
import S from './Nav.emotion'
const Nav = () => {
	return (
		<S.Nav>
			<S.Bar>
				<S.LeftBar>LOGO</S.LeftBar>

				<S.RightBar>
					<S.Item>HOME</S.Item>
					<S.Item>DISCOVERY</S.Item>
					<S.Item>PHOTOS</S.Item>
					<S.Item>CONTACT</S.Item>
					<S.Avatar></S.Avatar>
				</S.RightBar>
			</S.Bar>
		</S.Nav>
	)
}

export default Nav
