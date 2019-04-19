import React from 'react'
import ReactSVG from 'react-svg'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { LandImage, LandContent } from '../layout/Jumbotron/Image'
import { TextCard, TextContent } from '../layout/Jumbotron/TextCard'
import { Footer, FooterInput } from '../layout/Footer/Footer'

import { Text, Paragragh, Hr, Br } from '../components/Text'
import { Button } from '../components/Button'
import { Card, CardImage, CardContent } from '../layout/Carousel/Card'
import { BigCardContent, BigCard, BigCardTitle } from '../layout/Carousel/BigCard'

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
							<BigCardTitle>
								<Text color="#FFFFFF" size="16px" content="TRAVEL" />
							</BigCardTitle>
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
							<BigCardTitle>
								<Text color="#FFFFFF" size="16px" content="TRAVEL" />
							</BigCardTitle>
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
			<Footer>
				<Grid>
					<Row>
						<Col lg={1} md={1} sm={6} xs={0}>
							<Text size="16px" color="#EBEDED"  content="LOGO" />
						</Col>

						<Col lg={1} md={1} sm={6} xs={0}>
							<Text size="16px" color="#EBEDED" content="Home" />
							<Text size="16px" color="#EBEDED" content="Discovery" />
							<Text size="16px" color="#EBEDED" content="Photos" />
							<Text size="16px" color="#EBEDED" content="Contact" />
						</Col>
						<Col lg={1} md={1} sm={6} xs={0}>
							<Text size="16px" color="#EBEDED" content="About" />
							<Text size="16px" color="#EBEDED" content="Help" />
							<Text size="16px" color="#EBEDED" content="Terms" />
							<Text size="16px" color="#EBEDED" content="Guidlines" />
						</Col>
						<Col lg={1} md={1} sm={6} xs={0}>
							<Text size="16px" color="#EBEDED" content="Testimonials" />
							<Text size="16px" color="#EBEDED" content="Advertise" />
							<Text size="16px" color="#EBEDED" content="Integrations" />
							<Text size="16px" color="#EBEDED" content="Careers" />
						</Col>
						<Col lg={4} md={1} sm={6} xs={0}>
							<FooterInput placeholder="Email" />
							<Paragragh color="#EBEDED">Stay in touch with us for the freshest products!</Paragragh>
						</Col>
						<Col lg={4} md={4} sm={6} xs={0}>
							<svg xmlns="http://www.w3.org/2000/svg" width="160" height="16.001" viewBox="0 0 160 16.001">
								<g id="Social" transform="translate(24)">
									<g id="facebook" transform="translate(-1178 -2006)">
										<rect
											id="Rectangle_392"
											data-name="Rectangle 392"
											width="16"
											height="16"
											transform="translate(1250 2006)"
											fill="none"
										/>
										<path
											id="Path_1"
											data-name="Path 1"
											d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
											transform="translate(1174 2006.001)"
											fill="#fff"
											fill-rule="evenodd"
										/>
									</g>
									<g id="twitter" transform="translate(-1186 -2006)">
										<rect
											id="Rectangle_393"
											data-name="Rectangle 393"
											width="16"
											height="16"
											transform="translate(1210 2006)"
											fill="none"
										/>
										<path
											id="Path_2"
											data-name="Path 2"
											d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
											transform="translate(1172 2005.999)"
											fill="#fff"
											fill-rule="evenodd"
										/>
									</g>
									<g id="instagram" transform="translate(-1194 -2006)">
										<path
											id="Path_3"
											data-name="Path 3"
											d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
											transform="translate(1170 2006)"
											fill="#fff"
											fill-rule="evenodd"
										/>
									</g>
									<g id="web" transform="translate(-1170 -2006)">
										<path
											id="Path_4"
											data-name="Path 4"
											d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
											transform="translate(1290 2006)"
											fill="#fff"
										/>
									</g>
								</g>
							</svg>
						</Col>
					</Row>
				</Grid>
			</Footer>
		</React.Fragment>
	)
}

export default PageLanding
