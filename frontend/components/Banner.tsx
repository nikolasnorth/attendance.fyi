export default function Banner() {
  return (
    <section className="w-full bg-white">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600
              md:text-5xl lg:text-6xl lg:max-w-7xl"
              >
                Keep track of all your events <br className="hidden lg:block"/> in one place.
              </h1>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button
                    className="items-center block px-5 py-4 text-base font-medium text-center text-black transition
                    duration-500 ease-in-out transform bg-green-400 lg:px-10 rounded-xl hover:bg-green-500
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="font-bold">Sign Up</span>
                  </button>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button
                    className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-black
                    transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <span className="font-bold">Sign In</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
