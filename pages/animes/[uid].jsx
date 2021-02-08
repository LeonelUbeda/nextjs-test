import {getAnime, getAnimes} from '../../app/api/animes'

function AnimeDetail({anime}){
    return (
        <>
            <h1>{anime.title}</h1>
            <img src={anime.img} alt=""/>
        </>
    )
}

export async function getStaticProps(context){
    console.log(context)
    const {uid} = context.params
    const anime = await getAnime(uid)
    console.log(anime)
    return {
        props: {
            anime
        }
    }
}


// export async function getStaticPaths() {
//     const animes = await getAnimes()
//     console.log(animes)
//     const paths = animes.map(anime => ({params: { uid: anime.uid }}))
//     console.log(paths)
//     return {
//         paths,
//         fallback: false
//     }
// }

export default AnimeDetail

