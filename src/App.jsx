import SplitType from "split-type";
import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef();
  const mytext = new SplitType("#begblu");
  const mtext = new SplitType("#abtmetext");
  useGSAP(() => {
    gsap.from(".fname", {
      x: -120,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      delay: 0.5,
    });
    gsap.from(".lname", {
      x: -120,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      delay: 0.7,
    });
    gsap.from(".pfp", { scale: 0.1, duration: 1, delay: 0.5, opacity: 0 });

    gsap.from("#begblu .char", {
      y: -100,
      stagger: 0.05,
      delay: 0.3,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from("#aboutmenav", {
      x: -120,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      delay: 0.1,
    });

    gsap.from("#projectsnav", {
      x: -120,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      delay: 0.4,
    });

    gsap.from("#contactnav", {
      x: -120,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      delay: 0.7,
    });
    gsap.from("#eyeL", {
      x: -120,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      delay: 0,
    });
  });

  // gsap.from("#abtmetext .char", {
  //   y: -300,
  //   stagger: 0.01,
  //   delay: 0.2,
  //   duration: 0.3,
  //   ease: "power4.out",
  // });
  return (
    <div className=" bg-linen">
      <nav className="fixed left-4 top-4 flex items-center ">
        <a
          id="eyeL"
          href="#"
          className="text-caramel text-5xl font-bold font-abz "
        >
          il
        </a>
        <div className="flex ml-4">
          <a
            id="aboutmenav"
            href="#abtme"
            className="text-caramel text-base font-bold p-2 rounded-lg "
          >
            about me
          </a>
          <a
            id="projectsnav"
            href="#projects"
            className="text-caramel text-base font-bold p-2 rounded-lg "
          >
            projects
          </a>
          <a
            id="contactnav"
            href="#"
            className="text-caramel text-base font-bold p-2 rounded-lg "
          >
            contact
          </a>
        </div>
      </nav>

      <div className="w-4/5 h-screen flex justify-center items-center mx-auto">
        <div className="flex flex-col">
          <p className="text-caramel text-2xl font-mono font-thin" id="begblu">
            Nice to Meet You, I'm
          </p>
          <p className="text-caramel text-11xl font-jomhuria leading-[0.6] m-0 fname">
            Issac
          </p>
          <p className="text-caramel text-11xl font-jomhuria leading-[0.8] m-0 lname">
            Lin
          </p>
        </div>
        <div className="flex flex-col ml-8">
          <img
            src="/src/images/profile.jpg"
            alt="Description"
            className="w-80 h-80 object-contain border-8 border-caramel rounded-lg pfp"
          />
        </div>
      </div>
      <div className="w-9/12 h-screen mx-auto text-center" id="abtme">
        <p className="text-caramel text-8xl font-jomhuria py-6">About Me</p>
        <p className="text-rblack text-3xl font-mono" id="abtmetext">
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
