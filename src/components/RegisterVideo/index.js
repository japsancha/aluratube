import React from "react"
import { StyledRegisterVideo } from "./styles"

// Custom Hook
function useForm(propsForm) {
	const [values, setValues] = React.useState(propsForm.initialValues)

	return {
		values,
		handleChange: (event) => {
			console.log(event.target)
			const value = event.target.value
			const name = event.target.name
			setValues({
				...values,
				[name]: value,
			})
		},
		clearForm: () => {
			setValues({})
		}
	}
}

export default function RegisterVideo() {
	const formCadastro = useForm({
		initialValues: { titulo: "Frost Punk", url: "https://youtube..." }
	})
	const [formVisible, setFormVisible] = React.useState(false)

	/*
	## O que precisamos fazer para o form funcionar? (Isto é fazer o submit)
	- pegar os dados do form, que precisam vir do state
		- titulo
		- url do vídeo
	- precisamos do onSubmit do nosso form
	- Limpar os dados do form depois do submit
	*/

	// [X] Falta o botão de adicionar vídeo
	// [X] Falta o modal de adicionar vídeo
	// -> [X] Precisamos controlar o estado
	// -> [X] Falta o formulário de adicionar vídeo
	return (
		<StyledRegisterVideo>
			<button className="add-video" onClick={() => setFormVisible(true)}>
				+
			</button>
			{/* Ternario (condition ? expr1 : expr2) */}
			{/* Operador Curto-circuito  (condition && expr) */}
			{formVisible
				? (
					<form onSubmit={(event) => {
						event.preventDefault()
						console.log("submit", formCadastro.values)
						setFormVisible(false)
						formCadastro.clearForm()
					}}>
						<div>
							<button type="button" className="close-modal" onClick={() => setFormVisible(false)}>
								X
							</button>
							<input
								type="text"
								placeholder="Título do vídeo"
								name="titulo"
								value={formCadastro.values.titulo}
								onChange={formCadastro.handleChange}
							/>
							<input
								type="text"
								placeholder="URL do vídeo"
								name="url"
								value={formCadastro.values.url}
								onChange={formCadastro.handleChange}
							/>
							<button type="submit">
								Cadastrar
							</button>
						</div>
					</form>
				)
				: false}

		</StyledRegisterVideo >
	)
}