import React from 'react'

import { injectGlobal } from 'emotion'
import Helvetica from './assets/fonts/helvetica.woff'
import HelveticaBold from './assets/fonts/helvetica-bold.woff'
import Nav from './components/Nav'

injectGlobal`
    body{
        margin:0 auto;
    }

    * {
        box-sizing: border-box;
    }
    @font-face {
        font-family: "Helvetica";
        src: url(${Helvetica});
        font-weight:normal;
    }
    @font-face {
        font-family: "Helvetica";
        src: url(${HelveticaBold});
        font-weight: bold;
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
