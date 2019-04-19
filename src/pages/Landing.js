import React from 'react'
import ReactSVG from 'react-svg'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { LandImage, LandContent } from '../layout/Jumbotron/Image'
import { TextCard, TextContent } from '../layout/Jumbotron/TextCard'
import { Text, Paragragh, Hr, Br } from '../components/Text'
import { Button } from '../components/Button'
import { Card, CardImage, CardContent } from '../layout/Carousel/Card'
import { BigCardContent, BigCard ,BigCardTitle} from '../layout/Carousel/BigCard'

import Clock from '../assets/svg/clock.svg'

const PageLanding = () => {
	return (
		<React.Fragment>
			<div style={{ display: 'inline-flex', width: '100vw' }}>
				<div style={{ flex: 1 }}>
					<LandImage>
						<LandContent>
							<Text color="#FFFFFF" content="WORDLD NEWS" />
							<Hr marginTop="40px" marginBottom="40px" />
							<Text color="#FFFFFF" content="Subtitle article header" />
							<Paragragh color="#FFFFFF">
								Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.
								Affert detraxit voluptatum vis eu, inermis eloquentiam.
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
								Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.
								Affert detraxit voluptatum vis eu, inermis eloquentiam.
							</Paragragh>

							<ReactSVG src={Clock} />

							<Text color="#FA6980" content="TITLE" />
							<Br marginTop="20px" marginBottom="20px" />
							<Text content="Subtitle" />
							<Paragragh color="#A6ADB4">
								Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.
								Affert detraxit voluptatum vis eu, inermis eloquentiam.
							</Paragragh>

							<ReactSVG src={Clock} />
						</TextContent>
					</TextCard>
				</div>
			</div>

			<Grid style={{ backgroundColor: '#ffffff' }}>
				<div style={{ marginTop: '20px', marginBottom: '20px' }}>
					<Text content="TRANDING" />
				</div>
				<Row center="lg">
					<Col lg={4} md={4} sm={2} xs={1}>
						<Card>
							<CardImage>return</CardImage>
							<CardContent>
								<Text size="16px" content="Dolore magna aliqua" />
								<Paragragh color="#A6ADB4">
									Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
								</Paragragh>
								<ReactSVG src={Clock} />
							</CardContent>
						</Card>
					</Col>
					<Col lg={4} md={4} sm={2} xs={1}>
						<Card>
							<CardImage>return</CardImage>
							<CardContent>
								<Text size="16px" content="Dolore magna aliqua" />
								<Paragragh color="#A6ADB4">
									Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
								</Paragragh>
								<ReactSVG src={Clock} />
							</CardContent>
						</Card>
					</Col>
					<Col lg={4} md={4} sm={2} xs={1}>
						<Card>
							<CardImage>return</CardImage>
							<CardContent>
								<Text size="16px" content="Dolore magna aliqua" />
								<Paragragh color="#A6ADB4">
									Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
								</Paragragh>
								<ReactSVG src={Clock} />
							</CardContent>
						</Card>
					</Col>
				</Row>

				<div style={{ marginTop: '20px', marginBottom: '20px' }}>
					<Text content="HAPPENGING NOW" />
				</div>
				<Row>
					<Col lg={8} md={8} sm={12} xs={12}>
						<BigCard>
							<BigCardTitle><Text color="#FFFFFF" size="16px" content="TRAVEL" /></BigCardTitle>
							<BigCardContent>
								<Text color="#FFFFFF" size="16px" content="Dolore magna aliqua" />
								<Paragragh color="#FFFFFF">
									Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.
									Affert detraxit voluptatum vis eu, inermis eloquentiam.
								</Paragragh>
								<ReactSVG src={Clock} />
							</BigCardContent>
						</BigCard>
						<BigCard>
							<BigCardTitle><Text color="#FFFFFF" size="16px" content="TRAVEL" /></BigCardTitle>
							<BigCardContent>
								<Text color="#FFFFFF" size="16px" content="Dolore magna aliqua" />
								<Paragragh color="#FFFFFF">
									Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.
									Affert detraxit voluptatum vis eu, inermis eloquentiam.
								</Paragragh>
								<ReactSVG src={Clock} />
							</BigCardContent>
						</BigCard>
			
					</Col>
					<Col lg={4} md={4} sm={12} xs={12}>
						<Card>
							<CardImage>return</CardImage>
							<CardContent>
								<Text size="16px" content="Dolore magna aliqua" />
								<Paragragh color="#A6ADB4">
									Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
								</Paragragh>
								<ReactSVG src={Clock} />
							</CardContent>
						</Card>
						<Card>
							<CardImage>return</CardImage>
							<CardContent>
								<Text size="16px" content="Dolore magna aliqua" />
								<Paragragh color="#A6ADB4">
									Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
								</Paragragh>
								<ReactSVG src={Clock} />
							</CardContent>
						</Card>
						<Card>
							<CardImage>return</CardImage>
							<CardContent>
								<Text size="16px" content="Dolore magna aliqua" />
								<Paragragh color="#A6ADB4">
									Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.
								</Paragragh>
								<ReactSVG src={Clock} />
							</CardContent>
						</Card>
					</Col>
				</Row>
			</Grid>
		</React.Fragment>
	)
}

export default PageLanding
