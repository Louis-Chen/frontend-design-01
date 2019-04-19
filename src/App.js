import React from 'react'

import PageLanding from './pages/Landing'
import { ThemeProvider } from 'styled-components'

import { createGlobalStyle } from 'styled-components'

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
		gutterWidth: 1, // rem
		outerMargin: 0, // rem
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
				<PageLanding />
			</React.Fragment>
		</ThemeProvider>
	)
}

export default App
