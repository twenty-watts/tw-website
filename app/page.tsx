// app/page.tsx
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050A30] text-white font-inter relative">
      <Head>
        <title>Twenty Watts – Deep Tech AI for Energy Innovation</title>
        <meta
          name="description"
          content="Harnessing deep tech AI to revolutionize energy insights. Discover the power behind every watt."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Main Content */}
      <main className="flex flex-col flex-1 mt-32 w-full">
        <div className="w-full max-w-5xl mx-auto px-8">
          
          {/* Hero Section (Right-Aligned) */}
          <section className="text-right">
            <div className="max-w-xl ml-auto pb-10">
              <h1 className="text-6xl font-orbitron font-light">
                The Power of Artificial Intelligence
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Leveraging machine learning and artificial intelligence to create value in the energy industry:
                from power load forecasting to renewable power generation prediction.
              </p>
            </div>
          </section>

          {/* In a Nutshell Section (Left-Aligned) */}
          <section className="mt-12 text-left">
            <div className="max-w-xl mr-auto">
              <h2 className="text-3xl font-semibold">In a nutshell</h2>
              <p className="mt-6 text-lg text-gray-300">
                20 Watts is the average power of the human brain. At Twenty Watts, we aim to harness that power to devise
                artificially intelligent solutions for the energy industry.
              </p>
              <p className="mt-6 text-lg text-gray-300">
                <a
                  href="mailto:info@twentywatts.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Get in touch
                </a>
                {" "} to find out more about our technology and schedule a product demo.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}