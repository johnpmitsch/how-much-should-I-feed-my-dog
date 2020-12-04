import Head from "next/head";

export default function Home() {
  const inputClass =
    "w-1/16 bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out";
  return (
    <div>
      <Head>
        <title>How much should I feed my dog?</title>
        <link
          rel="icon"
          href="data:image/svg+xml,
          <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
            <text y=%22.9em%22 font-size=%2290%22>🐶</text>
          </svg>"
        />
      </Head>

      <main>
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/puppy.svg" alt="puppy face" /> {/* openmoji.org */}
            <span class="ml-3 text-xl">How Much Should I Feed My Dog?</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">FAQ</a>
            <a class="mr-5 hover:text-gray-900">About</a>
          </nav>
        </div>

        <div class="container mx-auto px-4 text-center">
          <div class="w-full py-1 px-2">
            <div class="text-2xl font-medium text-gray-900 mb-2 my-1">
              {"My dog "}
            </div>
            <input
              type="text"
              id="dogname"
              name="name"
              placeholder="Fido"
              className={inputClass}
            />
            <div class="text-2xl font-medium text-gray-900 mb-2 my-1">
              {" is "}
            </div>
            <input
              type="number"
              id="dogweight"
              name="weight"
              placeholder="12"
              min="1"
              max="300"
              className={inputClass}
            />
            <select className={inputClass} name="weightUnit" id="weightUnit">
              <option value="pounds">pounds</option>
              <option value="kilograms">kilograms</option>
            </select>

            <div class="text-2xl font-medium text-gray-900 mb-2 my-1">
              {" and "}
            </div>
            <input
              type="number"
              id="dogage"
              name="age"
              placeholder="4"
              min="1"
              max="40"
              className={inputClass}
            />
            <select className={inputClass} name="ageUnit" id="ageUnit">
              <option value="years">years</option>
              <option value="months">months</option>
            </select>
          </div>
          <div class="relative mb-4">
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
