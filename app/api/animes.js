import {getBaseQuery} from './config'

export const getAnimes = async () => {
    const response = await fetch(`${await getBaseQuery()}&q=[[at(document.type, "anime")]]`)
    const { results } = await response.json()
    return results.map( element => ({ 
        title: element.data.name, 
        uid: element.uid,
        img: element.data.cover.url
    }))
}

export const getAnime = async (uid) => {
    const response = await fetch(`${await getBaseQuery()}&q=[[at(my.anime.uid, "${uid}")]]`)
    const { results } = await response.json()
    // console.log(results)
    if (results.length > 0){
        let anime = results[0]
        return { 
            title: anime.data.name, 
            uid: anime.uid,
            img: anime.data.cover.url
        }
    }else{
        return null
    }
}