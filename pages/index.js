import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import HeroImage from '../public/hero.webp';

export default function Home() {
  return (
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center relative'>
      <Image src={HeroImage} alt='Hero' fill className='absolute' />
      <div className='relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-stone-900/90 rounded-md backdrop-blur-sm'>
        <Logo />
        <p>
          The writer's solution to generate highly polished content in minutes.
          Get high-quality work at rapid-fire speed.
        </p>
        <br />
        <Link href='/post/new' className='btn'>
          GET STARTED
        </Link>
      </div>
    </div>
  );
}
