import "./App.css";

function App() {
  return (
    <div>
      <nav className="bg-navbar p-4 fixed top-0 left-0 w-full z-10 ">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-caramel text-3xl font-bold font-abz">
            il
          </a>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-caramel text-base font-bold p-2 rounded-lg hover:bg-black  hover:shadow-lg transition-all duration-300"
            >
              about me
            </a>
            <a
              href="#"
              className="text-caramel text-base font-bold p-2 rounded-lg hover:bg-black  hover:shadow-lg transition-all duration-300"
            >
              projects
            </a>
            <a
              href="#"
              className="text-caramel text-base font-bold p-2 rounded-lg hover:bg-black  hover:shadow-lg transition-all duration-300"
            >
              contact
            </a>
          </div>
        </div>
      </nav>

      <div className="w-screen h-screen bg-linen flex items-center">
        <div className="flex flex-col  absolute left-28">
          <p className="text-caramel text-2xl font-mono font-thin">
            Nice to Meet You, I'm
          </p>
          <p className="text-caramel text-11xl font-jomhuria leading-[0.6] m-0">
            Issac
          </p>
          <p className="text-caramel text-11xl font-jomhuria leading-[0.8] m-0">
            Lin
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
