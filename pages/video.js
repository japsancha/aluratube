import React from "react"
import { ColorModeContext } from "../src/components/Menu/components/ColorMode"

export default function Video() {
	const context = React.useContext(ColorModeContext)

	return (
		<div>
			<h1>Video</h1>
			<p>Modo de cor: {context.mode}</p>
			<button onClick={context.toggleMode}>Mudar Modo de Cor</button>
		</div>
	)
}