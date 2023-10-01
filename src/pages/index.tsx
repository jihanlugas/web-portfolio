import { Ubuntu } from 'next/font/google'
import Head from 'next/head';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaStackOverflow, FaTelegram, FaGithub, FaUserSecret, FaLinkedinIn } from "react-icons/fa6";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
})

const Index = () => {
  return (
    <div>
      <Head>
        <title>{'Jihan Lugas'}</title>
      </Head>
      <section className="absolute">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <div className={'h-screen flex justify-center items-center ' + ubuntu.className}>
        <div className='max-w-3xl p-4 text-gray-200'>
          <div className='flex justify-center'>
            {/* <div className='w-40 h-40 flex justify-center items-center border mb-8'>
              <div>Image</div>
            </div> */}
            <div className='flex justify-center items-center mb-8 md:mb-12'>
              <FaUserSecret className={'text-7xl md:text-8xl'} size={''} />
            </div>
          </div>
          <div className='text-xl md:text-4xl text-center'>
            {"Hey, Jihan Lugas here"}
          </div>
          {/* <div className='text-base md:text-2xl mb-4 text-center'>
            {"I'm a backend developer"}
          </div> */}
          <div className='text-base md:text-xl mb-4 text-center'>
            {"The man who looking for jannah"}
          </div>
          <div className='text-base md:text-xl text-center mb-8'>
            {"If you want to know more about me, feel free to click on any button below"}
          </div>
          <div className='flex justify-center'>
            <Link
              href={'http://github.com/jihanlugas'}
              className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300'
              title={'Github'}
            >
              <FaGithub className={'text-2xl md:text-4xl'} size={''} />
            </Link>
            <Link
              href={'https://www.facebook.com/jihanlugas/'}
              className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300'
              title={'Facebook'}
            >
              <FaFacebookF className={'text-2xl md:text-4xl'} size={''} />
            </Link>
            <Link
              href={'https://www.instagram.com/jihanlugas/'}
              className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300'
              title={'Instagram'}
            >
              <FaInstagram className={'text-2xl md:text-4xl'} size={''} />
            </Link>
            <Link
              href={'https://stackoverflow.com/users/14080697/jihan-lugas'}
              className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300'
              title={'Stackoverflow'}
            >
              <FaStackOverflow className={'text-2xl md:text-4xl'} size={''} />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/jihan-lugas-13a914195'}
              className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300'
              title={'Linkedin'}
            >
              <FaLinkedinIn className={'text-2xl md:text-4xl'} size={''} />
            </Link>
            {/* <Link href={'#'} className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300'>
              <FaTelegram className={'text-2xl md:text-4xl'} size={''} />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;