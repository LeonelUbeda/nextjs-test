import {PRISMIC_TOKEN} from '../env'

const BASE_URL = 'https://amimir-blog.cdn.prismic.io/api/v2'

export async function getMasterRef(){
    let response = await fetch(`${BASE_URL}?access_token=${PRISMIC_TOKEN}`) // 
    const {refs} = await response.json()
    return refs.find(element => element.id === 'master')?.ref 
}


export const getBaseQuery = async () => {
    return `${BASE_URL}/documents/search?ref=${await getMasterRef()}&access_token=${PRISMIC_TOKEN}`
}

