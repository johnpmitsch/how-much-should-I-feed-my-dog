import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>How Much Should I Feed My Dog?</title>
        <link
          rel="icon"
          href="data:image/svg+xml,
          <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
            <text y=%22.9em%22 font-size=%2290%22>🐶</text>
          </svg>"
        />
      </Head>

      <main>
        <img src="/puppy.svg" alt="puppy face" /> {/* openmoji.org */}
        <h1>How much should I feed my dog?</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
}
