// app/about/page.tsx
import Head from "next/head";


export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050A30] text-white font-inter relative">
      <Head>
        <title>About | Twenty Watts – Deep Tech AI for Energy Innovation</title>
        <meta
          name="description"
          content="Learn more about Twenty Watts – who we are, our vision, and our technology."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Background Particle Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-stars"></div> {/* Placeholder for animated particles */}
      </div>

      {/* Main Content */}
      <main className="flex flex-col flex-1 mt-32 w-full pb-20">
        <div className="w-full max-w-5xl mx-auto px-8">
          {/* --- Section 1: Who we are (Left-Aligned) --- */}
          <section className="text-left">
            <div className="max-w-xl mr-auto">
              <h1 className="text-5xl font-bold">Who we are</h1>
              <p className="mt-6 text-lg text-gray-300">
                Twenty Watts is an innovative startup based in Italy, focused on applying the latest
                technological advances in the fields of machine learning and artificial intelligence for
                uncovering value in the energy industry.
              </p>
            </div>
          </section>

          {/* --- Section 2: Our vision (Right-Aligned) --- */}
          <section className="mt-12 text-right">
            <div className="max-w-xl ml-auto">
              <h2 className="text-5xl font-bold">Our vision</h2>
              <p className="mt-6 text-lg text-gray-300">
                20 Watts is the power consumption of the average human brain. At Twenty Watts, we aim to make
                use of that power in order to forecast as accurately as possible much larger power loads, by
                monitoring through the most advanced learning algorithms every single possible variable that
                could influence power consumption or production, at any time.
              </p>
            </div>
          </section>

          {/* --- Section 3: Our technology (Left-Aligned) --- */}
          <section className="mt-12 text-left">
            <div className="max-w-xl mr-auto">
              <h2 className="text-5xl font-bold">Our technology</h2>
              <p className="mt-6 text-lg text-gray-300">
                Technology is the name of the game at Twenty Watts. It influences every single aspect of our products:
                from design to production, at 20 Watts we are always looking for the best and latest technology,
                driven by our strong belief that only the best technology, in conjunction with the best data, can
                give us a significant edge over our competitors.
              </p>
              <p className="mt-6 text-lg text-gray-300">
                The energy market is a complex network in which energy demand and supply need to be balanced at all
                times. These are determined by many external factors that interact with each other: weather conditions,
                socio-economic state of nations, geo-political environment, seasonal trends.
              </p>
              <p className="mt-6 text-lg text-gray-300">
                Understanding how these factors influence the energy industry as a whole is a complex task that requires a
                combination of the best technology, the most accurate data sources and deep industry expertise. At Twenty
                Watts we leverage state of the art machine learning and artificial intelligence technology to develop the
                most accurate predictive analytics solutions for our customers: from individual consumers’ power load
                forecasting to predicting power production by renewable sources.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}