import Head from "next/head";
import HeaderIcon from "../components/HeaderIcon";
import NavBar from "../components/NavBar";

export default function Home() {
  const inputClass =
    "w-1/16 bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-1 mx-1 my-1 ";
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
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <HeaderIcon />
          <NavBar />
        </div>

        <div className="w-full lg:w-1/3 mr-auto ml-auto justify-center text-center items-center">
          <div className="bg-secondaryBackground shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="text-2xl font-medium text-gray-900 mb-2 my-1">
              {"My dog "}
            </div>
            <form class="w-full max-w-sm">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-600 text-xl md:text-right mb-1 md:mb-0 pr-4"
                    for="name"
                  >
                    Name
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-white appearance-none border-2 border-gray-300 focus:border-indigo-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="name"
                    type="text"
                    placeholder="Fido"
                  />
                </div>
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-600 text-xl md:text-right mb-1 md:mb-0 pr-4"
                    for="weight"
                  >
                    Weight
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-white appearance-none border-2 border-gray-300 focus:border-indigo-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="weight"
                    type="text"
                    placeholder="Fido"
                  />
                </div>
              </div>
            </form>
            <div>
              <label for="age" className="text-xl text-gray-600 px-2">
                Weight
              </label>
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
            </div>
            <div>
              <label for="age" className="text-xl text-gray-600 px-2">
                Age
              </label>
              <input
                type="number"
                id="dogage"
                name="age"
                placeholder="4"
                min="1"
                max="24"
                className={inputClass}
              />
              <select className={inputClass} name="ageUnit" id="ageUnit">
                <option value="years">years</option>
                <option value="months">months</option>
              </select>
            </div>
            <div className="relative mb-4">
              <button className="text-white bg-indigo-500 border-0 mt-4 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
