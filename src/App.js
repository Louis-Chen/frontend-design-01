import React from 'react'

import { ThemeProvider } from 'styled-components'

import { createGlobalStyle } from 'styled-components'

import PageLanding from './pages/Landing'
import Navagation from './layout/Nav/Menu'

const GlobalStyle = createGlobalStyle`
  body {
	margin:auto;
	background-color:gray;
  }
`

const theme = {
	flexboxgrid: {
		// Defaults
		gridSize: 12, // columns
		gutterWidth: 4, // rem
		outerMargin: 2, // rem
		mediaQuery: 'only screen',
		container: {
			sm: 46, // rem
			md: 61, // rem
			lg: 76 // rem
		},
		breakpoints: {
			xs: 0, // em
			sm: 48, // em
			md: 64, // em
			lg: 75 // em
		}
	}
}
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<GlobalStyle />
				<Navagation />
				<PageLanding />
			</React.Fragment>
		</ThemeProvider>
	)
}

export default App
