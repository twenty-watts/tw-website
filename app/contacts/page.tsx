// app/contacts/page.tsx
import Head from "next/head";

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050A30] text-white font-inter relative">
      <Head>
        <title>Contacts | Twenty Watts – Deep Tech AI for Energy Innovation</title>
        <meta name="description" content="Get in touch with Twenty Watts for more information or to schedule a demo." />
      </Head>

      {/* Main Content */}
      <main className="flex flex-col flex-1 mt-32 w-full">
        <div className="w-full max-w-5xl mx-auto px-8">
          <section className="text-left">
            <div className="max-w-xl mr-auto ">
              <h1 className="text-5xl font-bold">Contacts</h1>
              <p className="mt-6 text-lg text-gray-300">
                If you’d like to learn more about our innovative solutions or schedule a demo to see our technology in action,
                please don’t hesitate to get in touch.
              </p>
              <p className="mt-6 text-lg text-gray-300">
                Send an email to{" "}
                <a
                  href="mailto:info@twentywatts.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  hello@twentywatts.com
                </a>
                , and we’ll get back to you as soon as possible.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}