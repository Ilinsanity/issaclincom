import "./App.css";

function App() {
  return (
    <div className=" bg-linen">
      {/* <nav className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-4 space-y-6">
        <div className="max-w-6xl mx-auto">
          <a href="#" className="text-caramel text-3xl font-bold font-abz">
            il
          </a>
          <div className="flex space-x-6">
            <a
              href="#abtme"
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
      </nav> */}
      <nav className="fixed left-0 top-0 h-full bg-caramel flex flex-col items-center py-4 space-y-16">
        <a href="#" className="text-linen text-3xl font-bold font-abz">
          il
        </a>
        <div className="flex flex-col space-y-4">
          <a
            href="#abtme"
            className="text-linen text-base font-bold p-2 rounded-lg hover:bg-black  hover:shadow-lg transition-all duration-300 text-center"
          >
            about me
          </a>
          <a
            href="#projects"
            className="text-linen text-base font-bold p-2 rounded-lg hover:bg-black  hover:shadow-lg transition-all duration-300 text-center"
          >
            projects
          </a>
          <a
            href="#"
            className="text-linen text-base font-bold p-2 rounded-lg hover:bg-black  hover:shadow-lg transition-all duration-300 text-center"
          >
            contact
          </a>
        </div>
      </nav>

      <div className="w-4/5 h-screen flex justify-center items-center mx-auto">
        <div className="flex flex-col">
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
        <div className="flex flex-col ml-8">
          <img
            src="/src/images/profile.jpg"
            alt="Description"
            className="w-80 h-80 object-contain border-8 border-caramel rounded-lg"
          />
        </div>
      </div>
      <div className="w-9/12 h-screen mx-auto text-center" id="abtme">
        <p className="text-caramel text-8xl font-jomhuria py-6">About Me</p>
        <p className="text-rblack text-3xl font-mono">
          Hi, I’m Issac Lin, a passionate web developer who loves turning ideas
          into interactive and engaging web experiences. I specialize in
          TypeScript, JavaScript, React, and Tailwind CSS, focusing on creating
          clean, responsive, and visually appealing designs.
          <br /> <br /> I’m currently seeking my first role in tech, eager to
          contribute and grow in a collaborative team. Beyond coding, I enjoy
          gaming, taking walks, and exploring new music.
          <br /> <br /> Let’s connect! Check out my [GitHub] or [LinkedIn] to
          see what I’m working on.
        </p>
      </div>
      <div className="w-9/12 h-screen mx-auto" id="projects">
        <p className="text-caramel text-8xl font-jomhuria">Projects</p>
        <div className="flex flex-col">
          <div className="flex">
            <div>
              <p className="text-caramel text-2xl font-mono font-thin">
                Colour Blind
              </p>
            </div>
            <div></div>
          </div>
          <div className="">asdasdasdasd</div>
          <div className="">asdasdasdasd</div>
        </div>
      </div>
    </div>
  );
}

export default App;
