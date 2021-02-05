import {getAnime} from '../../app/api/animes'

function AnimeDetail({anime}){
    return (
        <>
            <h1>{anime.title}</h1>
            <img src={anime.img} alt=""/>
        </>
    )
}

export async function getServerSideProps(context){
    const {uid} = context.query
    const anime = await getAnime(uid)
    console.log(anime)
    return {
        props: {
            anime
        }
    }
}


export default AnimeDetail

