import Body from '@/Body';
import Footer from '@/Footer';
import Hero from '@/Hero';
import IconWithCaption from '@/IconWithCaption';
import Intro from '@/Intro';
import Navbar from '@/Navbar'

export default function Home() {
  return (
    <div className='text-white bg-sky-600'>
      <Navbar className='bg-white' />
      <div className='max-sm:px-[20px]'>
        <Hero />
      <div className="flex flex-col justify-between">
        <IconWithCaption />
      </div>
      <div className="py-10">
        <Intro />
      </div>
      <div className="">
        <Body />
      </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
