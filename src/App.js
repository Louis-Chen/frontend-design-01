import React from 'react'

import { injectGlobal } from 'emotion'
import Helvetica from './assets/fonts/helvetica.woff'
import Nav from './components/Nav'

injectGlobal`
    margin:0 auto;
    * {
        box-sizing: border-box;

    }
    @font-face {
        font-family: "Helvetica";
        src: url(${Helvetica});
    }
    font-family: "Helvetica";

`
const App = () => {
	return (
		<div>
			<Nav></Nav>
		</div>
	)
}

export default App
