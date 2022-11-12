import React from "react"

export const ColorModeContext = React.createContext({
	mode: "",
	setMode: () => { alert("Você precisa configurar-me para funcionar") },
	toggleMode: () => { alert("Você precisa configurar-me para funcionar") }
})

export default function ColorModeProvider(props) {
	const [mode, setMode] = React.useState(props.initialMode)

	function toggleMode() {
		setMode(mode === "dark" ? "light" : "dark")
	}

	return (
		<ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
			{props.children}
		</ColorModeContext.Provider>
	)
}