import {getBaseQuery} from './config'
// import Post from '../interfaces/Post'

export const getPosts = async () => {
    const response = await fetch(`${await getBaseQuery()}&q=[[at(document.type, "post")]]`)
    const { results } = await response.json()

    return results.map( element => ({ 
        title: element.data.name,
        uid: element.uid,
        img: element.data.cover.url
    }))

}

export const getPost = async (uid) => {
    const response = await fetch(`${await getBaseQuery()}&q=[[at(my.anime.uid, "${uid}")]]`)
    const { results } = await response.json()

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


export const getCategories = async () => {
    const response = await fetch(`${await getBaseQuery()}&q=[[at(document.type, "category")]]`)
    const { results } = await response.json()

    return results.map( element => ({ 
        id: element.id,
        name: element.data.name,
        uid: element.uid,
    }))

}