import { Ubuntu } from 'next/font/google'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaStackOverflow, FaTelegram, FaGithub, FaUserSecret, FaLinkedinIn } from "react-icons/fa6";
import Particles from 'react-particles';

import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import { useCallback } from 'react';

const ubuntu = Ubuntu({
  subsets: ['latin-ext'],
  weight: '400',
})

const Index = () => {

  const particlesInit = useCallback(async (engine: Engine) => {

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
  }, []);

  return (
    <div>
      <Head>
        <title>{'Jihan Lugas'}</title>
      </Head>
      {/* <section className="absolute">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section> */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,

              },
              repulse: {
                distance: 150,
                duration: 5,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className={`h-screen flex justify-center items-center ${ubuntu.className}`}>
        <div className='max-w-3xl p-4 text-gray-200'>
          <div className='flex justify-center'>
            {/* <div className='w-40 h-40 flex justify-center items-center border mb-8'>
              <div>Image</div>
            </div> */}
            <div className='flex justify-center items-center mb-8 md:mb-12'>
              <Image
                className=""
                src="/face-scan-square-svgrepo-com.svg"
                alt="Face logo"
                width={72}
                height={72}
                priority
              />
            </div>
          </div>
          <div className='text-xl md:text-4xl text-center'>
            {"Hey, Jihan Lugas here"}
          </div>
          <div className='text-base md:text-2xl mb-4 text-center'>
            {"He/Him"}
          </div>
          <div className='text-base md:text-xl mb-4 text-center'>
            {"Software Engineer has an experienced full-stack development specializing in Golang and Next.js"}
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