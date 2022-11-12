import React from "react"
import { ThemeProvider } from 'styled-components'
import { CSSReset } from "../src/components/CSSReset"
import ColorModeProvider, { ColorModeContext } from '../src/components/Menu/components/ColorMode'
import RegisterVideo from "../src/components/RegisterVideo"

const theme = {
	light: {
		backgroundBase: "#f9f9f9",
		backgroundLevel1: "#ffffff",
		backgroundLevel2: "#f0f0f0",
		borderBase: "#e5e5e5",
		textColorBase: "#222222",
	},
	dark: {
		backgroundBase: "#181818",
		backgroundLevel1: "#202020",
		backgroundLevel2: "#313131",
		borderBase: "#383838",
		textColorBase: "#FFFFFF",
	}
}

function ProviderWraper(props) {
	return (
		<ColorModeProvider initialMode={"dark"}>
			{props.children}
		</ColorModeProvider>
	)
}
// _app.js -> é o componente que vai ser renderizado em todas as páginas da aplicação (páginas do Next.js)
// ou seja é o componente onde colocamos as Definições Globais da aplicação
// ThemeProvider -> é o componente que vai ser responsável por definir o tema da aplicação
// ColorModeProvider -> é o componente que vai ser responsável por definir o modo de cor da aplicação

function Root({ Component, pageProps }) {
	const context = React.useContext(ColorModeContext)

	return (
		<ThemeProvider theme={theme[context.mode]}>
			<CSSReset />
			<Component {...pageProps} />
			<RegisterVideo />
		</ThemeProvider>
	)
}

export default function _App(props) {
	return (
		<ProviderWraper>
			<Root {...props} />
		</ProviderWraper>
	)
}
