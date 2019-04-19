import React from 'react'
import ReactSVG from 'react-svg'

import { LandImage, LandContent } from '../layout/Jumbotron/Image'
import { TextCard, TextContent } from '../layout/Jumbotron/TextCard'
import { Text, Paragragh, Hr, Br } from '../components/Text'
import { Button } from '../components/Button'

import Clock from '../assets/svg/clock.svg'

const PageLanding = () => {
	return (
		<div style={{ display: 'inline-flex', width: '100vw' }}>
			<div style={{ flex: 1 }}>
				<LandImage>
					<LandContent>
						<Text color="#FFFFFF" content="WORDLD NEWS" />
						<Hr marginTop="40px" marginBottom="40px" />
						<Text color="#FFFFFF" content="Subtitle article header" />
						<Paragragh color="#FFFFFF">
							Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert
							detraxit voluptatum vis eu, inermis eloquentiam.
						</Paragragh>
						<Button primary content="LEARN MORE" />
					</LandContent>
				</LandImage>
			</div>

			<div style={{ flex: 2 }}>
				<TextCard>
					<TextContent>
						<Text content="MORE NEWS" />
						<Hr color="#EBEDED" marginTop="20px" marginBottom="20px" />
						<Text color="#FA6980" content="TITLE" />
						<Br marginTop="20px" marginBottom="20px" />
						<Text content="Subtitle" />
						<Paragragh color="#A6ADB4">
							Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert
							detraxit voluptatum vis eu, inermis eloquentiam.
						</Paragragh>

						<ReactSVG src={Clock} />

						<Text color="#FA6980" content="TITLE" />
						<Br marginTop="20px" marginBottom="20px" />
						<Text content="Subtitle" />
						<Paragragh color="#A6ADB4">
							Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert
							detraxit voluptatum vis eu, inermis eloquentiam.
						</Paragragh>

						<ReactSVG src={Clock} />
					</TextContent>
				</TextCard>
			</div>
		</div>
	)
}

export default PageLanding
