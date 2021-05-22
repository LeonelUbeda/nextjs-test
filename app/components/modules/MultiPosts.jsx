import styled from "styled-components";
import Image from "next/image";

const height = 400;

const Container = styled.div``;

const SliderContainer = styled.div``;
const SideContainer = styled.div``;
const MultiPosts = ({ posts = [] }) => {
  return (
    <>
      <div className='py-10 grid md:grid-cols-8 gap-2'>
        <SliderContainer className='relative md:col-span-5 h-250px md:h-400px lg:h-500px'>
          <Image
            src='https://source.unsplash.com/random/750x500'
            className='w-full h-full object-cover rounded-md'
            layout='fill'
          />
          <div className='absolute bg-blue-500 bottom-0 w-full bg-opacity-50 py-2 px-3 text-white rounded-md'>
            {/* <span className="tags text-gray-200 font-semibold text-sm">
                            Juegos
                        </span> */}
            <h1 className='font-semibold md:text-2xl'>
              Como crear un proyecto de Django y React en 5 sencillos pasos y
              con poco conocimiento
            </h1>
            <span className='font-light mt-2 block'>Tutorial para noobies</span>
          </div>
        </SliderContainer>
        <SideContainer className='grid gap-2 sm:grid-cols-2 md:h-400px md:grid-cols-1 md:grid-rows-2 md:col-span-3 lg:h-500px'>
          <div className='relative h-250px md:h-auto'>
            <div className='absolute bg-indigo-500 bottom-0 w-full bg-opacity-50 py-2  rounded-md'>
              <h1 className='text-white font-semibold md:text-lg px-3'>
                Proyecto de Django y React{" "}
              </h1>
            </div>
            <Image
              src='https://source.unsplash.com/random/400x240'
              layout='fill'
              className='w-full h-full object-cover rounded-md'
            />
          </div>
          <div className='relative h-250px md:h-auto'>
            <div className='absolute bg-indigo-500 bottom-0 w-full bg-opacity-50 py-2 px-2  rounded-md'>
              <h1 className='text-white font-semibold md:text-lg'>
                Proyecto de Django y React{" "}
              </h1>
            </div>
            <Image
              src='https://source.unsplash.com/random/400x240'
              layout='fill'
              className='w-full h-full object-cover rounded-md'
            />
          </div>
        </SideContainer>
      </div>
    </>
  );
};

export default MultiPosts;
