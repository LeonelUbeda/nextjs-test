import Image from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
  excerpt: string;
  coverImage?: {
    url?: string;
  };
  author?: {
    slug: string;
    name: string;
  };
  title: string;
}

const Post = ({ excerpt, title, coverImage, author, slug }: Props) => {
  return (
    <>
      <div className='w-full grid gap-y-5 grid-cols-1 md:grid-cols-2 md:gap-x-5'>
        <Link href={`/posts/${slug}`}>
          <a>
            <Image
              width='560'
              height='370'
              className='w-full h-full rounded-md'
              objectFit='cover'
              layout='responsive'
              src={
                coverImage?.url ||
                "https://cdn.vox-cdn.com/thumbor/0XtbXLYWd7peO6E3fNnscffziXA=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68776136/acastro_180507_1777_microsoft_0001.0.jpg"
              }
            />
          </a>
        </Link>
        <div>
          <Link href={`/posts/${slug}`}>
            <a>
              <h3 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                {title ||
                  "Microsoft suspends donations for politicians who attempted to overturn the 2020 election"}
              </h3>
            </a>
          </Link>
          <p className='text-gray-600 my-1'>{excerpt}</p>
          <div className='text-gray-500 mt-1'>
            <span> por: </span>
            <Link href={author?.slug ? `/authors/${author?.slug}` : ""}>
              <a>
                <span className='text-blue-400'>
                  {author?.name || "Anonimo"}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
