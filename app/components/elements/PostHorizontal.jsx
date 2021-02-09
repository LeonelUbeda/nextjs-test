import Image from 'next/image'


const PostHorizontal = ({title, coverImage, author}) => {
    return (
        <>
        <div className="w-full flex max-w-3xl py-3 border-b border-gray-400">
            <div className="w-28 md:w-36 lg:w-52 flex-shrink-0">
                <Image width="280" height="160" className="w-full h-full" objectFit="cover"
                src={coverImage?.url || "https://cdn.vox-cdn.com/thumbor/0XtbXLYWd7peO6E3fNnscffziXA=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68776136/acastro_180507_1777_microsoft_0001.0.jpg"}/>
            </div>
            <div className="px-2 w-full">
                <h3 className="md:text-md lg:text-lg xl:text-xl font-semibold">{title || "Microsoft suspends donations for politicians who attempted to overturn the 2020 election"}</h3>
                <div className="text-gray-500 mt-1">
                <span> por: </span>
                <span className="text-blue-400">{author?.name || "Anonimo"}</span>
                </div>
            </div>
        </div>
        </>
    )
}


export default PostHorizontal