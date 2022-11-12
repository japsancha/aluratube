import React from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
	const [filterValue, setFilterValue] = React.useState("")

	return (
		<>
			<div style={{
				display: "flex",
				flexDirection: "column",
				flex: 1,
				// backgroundColor: "red",
			}}>
				{/* Prop Drilling */}
				<Menu filterValue={filterValue} setFilterValue={setFilterValue} />
				<Header />
				<Timeline searchValue={filterValue} playlists={config.playlists}>
					Conteúdo
				</Timeline>
			</div>
		</>
	)
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
	background: ${({ theme }) => theme.backgroundLevel1};

	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.user-info {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	}
`

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg}); /* recebendo a prop bg */
    /* background-image: url(${config.bg}); */
    height: 230px;
`

function Header() {
	return (
		<StyledHeader>
			<StyledBanner bg={config.bg} />   {/*  passando a prop bg para o StyledBanner */}
			<section className="user-info">
				<img src={config.github} />
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
				</div>
			</section>
		</StyledHeader>
	)
}

function Timeline({ searchValue, ...props }) {
	// console.log("Dentro do componente", props.playlists)
	const playlistNames = Object.keys(props.playlists)

	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = props.playlists[playlistName]
				// console.log(playlistName)
				// console.log(videos)
				return (
					<section key={playlistName}>
						<h2>{playlistName}</h2>
						<div>
							{videos
								.filter((video) => {
									const titleNormalized = video.title.toLowerCase()
									const searchValueNormalized = searchValue.toLowerCase()
									return titleNormalized.includes(searchValueNormalized)
								})
								.map((video) => {
									return (
										<a key={video.url} href={video.url} >
											<img src={video.thumb} />
											<span>
												{video.title}
											</span>
										</a>
									)
								})}
						</div>
					</section>
				)
			})}
		</StyledTimeline>
	)
}