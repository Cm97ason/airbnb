import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../Components/Header"
import Banner from "../Components/Banner"
import SmallCard from "../Components/SmallCard"
import MediumCard from "../Components/MediumCard"
import LargeCard from "../Components/LargeCard"
import Footer from "../Components/Footer"

const Home: NextPage = ({ exploreData, cardsData }) => {
  exploreData;
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    <Banner />

    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        {/* Pull some data from server - API endpoints */}
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {exploreData?.map(({img, distance, location}) => (
          <SmallCard
            key={img}
            img={img}
            distance={distance}
            location={location}/>
        ))}
        </div>
      </section>
      
      <section>
          <h2 className="text-4xl font-semibold py-8">
             Live Anywhere
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
             {cardsData.map(({ img, title }) => (
             <MediumCard key={img} img={img} title={title} />
          ))}
        </div>
      </section>

      <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Great Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get inspired"
      />
    </main>
    <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
      (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
      (res) => res.json()
  );

  return {
      props: {
          exploreData: exploreData,
          cardsData: cardsData,
      },
  };
}

export default Home
