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
        <div className='w-full max-w-3xl p-4 text-gray-200 text-center'>
          <Link
            href={'/pdf/cpns-bin.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Badan Intelegen Negara
            </div>
          </Link>
          <Link
            href={'/pdf/cpns-brin.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Badan Riset dan Inovasi Nasional
            </div>
          </Link>
          {/* <Link
            href={'/pdf/cpns-bin.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Kejaksaan Agung
            </div>
          </Link> */}
          <Link
            href={'/pdf/cpns-kemendagri.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Kementerian Dalam Negeri
            </div>
          </Link>
          <Link
            href={'/pdf/cpns-kementrian-edsm.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Kementerian Energi dan Sumber Daya Mineral
            </div>
          </Link>
          <Link
            href={'/pdf/cpns-kemenkumham.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Kementerian Hukum dan Hak Asasi Manusia
            </div>
          </Link>
          <Link
            href={'/pdf/cpns-kemenperin.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Kementerian Perindustrian
            </div>
          </Link>
          <Link
            href={'/pdf/cpns-ma.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Mahkamah Agung RI
            </div>
          </Link>
          <Link
            href={'/pdf/cpns-ppatk.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Pusat Pelaporan dan Analisis Transaksi Keuangan
            </div>
          </Link>
          <Link
            href={'/pdf/cpns-sekretariat-dpr-ri.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Sekretariat Jenderal DPR RI
            </div>
          </Link>
          <Link
            href={'/pdf/cpns-kpk.pdf'}
            className='mx-2 md:mx-4 p-2 md:p-4 text-gray-400 hover:text-gray-100 duration-300 flex justify-center w-full border mb-4'
            title={'Github'}
            target={'_blank'}
          >
            <div className=''>
              Setjen Komisi Pemberantasan Korupsi
            </div>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Index;