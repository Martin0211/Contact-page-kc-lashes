import Head from 'next/head'

const fetchVideo = () => {

    return fetch('https://www.tiktok.com/oembed?url=https://www.tiktok.com/@kclashes_mex/video/7134150439125126405')
    .then((response) => response.json())
    .then((data) => data.html)
}

export default async function VideoTiktok(){
    const dataApi = await fetchVideo()
    return (
        <div className='w-min h-[775px] bg-white'>
        <Head>
          <link rel="stylesheet" href="/styles.css" />
          <script className='bg-transparent' src="/script.js"></script>
        </Head>
        <main>
          <div dangerouslySetInnerHTML={{ __html: dataApi }} />
        </main>
      </div>
        )
    }
   