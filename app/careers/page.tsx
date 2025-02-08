// app/careers/page.tsx
import Head from "next/head";
import Link from "next/link";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050A30] text-white font-inter relative">
      <Head>
        <title>Careers | Twenty Watts – Deep Tech AI for Energy Innovation</title>
        <meta name="description" content="Careers at Twenty Watts" />
      </Head>

      {/* Main Content */}
      <main className="flex flex-col flex-1 mt-32 w-full">
        <div className="w-full max-w-5xl mx-auto px-8">
          <section className="text-left">
            <div className="max-w-xl mr-auto">
              <h1 className="text-5xl font-bold">Careers</h1>
              <p className="mt-6 text-lg text-gray-300">
                Here at Twenty Watts we build software that is at the forefront of research and technology.
                We develop solutions that do not exist yet and through our technology we discover hidden values
                that nobody else has seen yet.
              </p>
              <p className="mt-6 text-lg text-gray-300">
                As you can imagine, accomplishing this magnificent task really requires that we use our 20W machines
                at full power.
              </p>
              <p className="mt-6 text-lg text-gray-300">
                Check out our{" "}
                <Link
                  href="https://www.linkedin.com/company/twenty-watts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  LinkedIn
                </Link>{" "}
                page to learn more about our current job openings.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}