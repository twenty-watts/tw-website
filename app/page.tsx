import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white font-inter">
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

      {/* Content container (narrower column) */}
      <div className="max-w-xl mx-auto px-4 flex flex-col flex-1">
        {/* Header */}
        <header className="py-6 flex justify-center">
          <Image
            src="/twentywatts.gif"
            alt="TW logo"
            width={240}
            height={50}
            priority
          />
        </header>

        {/* Main inspirational copy */}
        <main className="flex flex-col flex-1 justify-center gap-6 text-center">
          <p className="text-2xl leading-relaxed font-light">
            At Twenty Watts, we harness the silent power of innovation.
            Inspired by the intricate workings of the human mind, our deep tech AI transforms raw data into a future of endless possibilities.
          </p>
          <p className="text-xl leading-relaxed">
            We decode the complexity of energy consumption through advanced machine learning algorithms,
            converting every byte of information into actionable insights. Our technology not only predicts trends but redefines the landscape of energy management.
          </p>
          <p className="text-xl leading-relaxed">
            Embracing a spirit of relentless curiosity, we challenge the status quo to unveil the unseen potential in every watt.
            With precision and creativity at our core, we empower industries to make smarter, data-driven decisions.
          </p>
          <p className="text-xl leading-relaxed">
            Dare to explore the frontier where intelligence meets energy and join us in shaping a sustainable, innovative future.
          </p>
        </main>

        {/* Footer with horizontal layout */}
        <footer className="py-6 flex justify-between items-center border-t border-gray-700">
          <div>
            <Image
              src="/logo-banner.png"
              alt="Logo Banner"
              width={160}
              height={33}
            />
          </div>
          <div className="text-right text-sm">
            <p>&copy; {new Date().getFullYear()} Twenty Watts. All rights reserved.</p>
            <p>info@twentywatts.com</p>
            <p>Via Rugabella, 10</p>
            <p>20122 Milano (MI)</p>
          </div>
        </footer>
      </div>
    </div>
  );
}