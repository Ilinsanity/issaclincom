import SplitType from "split-type";
import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9,0,0.1,1");

function App() {
  const container = useRef();
  const mytext = new SplitType("#begblu");
  const mtext = new SplitType("#abtmetext");

  const nums = Array.from(
    { length: 100 },
    (_, i) => i.toString().padStart(2, "0") // Format as two digits
  );

  const dig1 = document.querySelector("#dig1");
  const dig2 = document.querySelector("#dig2");
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    const counts = document.querySelectorAll(".count");

    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");
      tl.to(
        digits,
        {
          y: "0%",
          duration: 0.2,
          stagger: 0.05,
        },
        index * 1
      );

      if (index < counts.length) {
        tl.to(
          digits,
          {
            y: "-100%",
            duration: 0.2,
            stagger: 0.05,
          },
          index * 1 + 1
        );
      }
    });
    tl.to(".spinner", { opacity: 0, duration: 0.3 });
    tl.to(
      ".word h1",
      {
        y: "0%",
        duration: 1,
      },
      "<"
    );

    tl.to(".divider", {
      scaleY: "100%",
      duration: 1,
      onComplete: () =>
        gsap.to(".divider", { opacity: 0, duration: 0.4, delay: 0.3 }),
    });

    tl.to("#word-1 h1", {
      y: "100%",
      duration: 1,
      delay: 0.3,
    });

    tl.to(
      "#word-2 h1",
      {
        y: "-100%",
        duration: 1,
        delay: 0.3,
      },
      "<"
    );

    tl.to(".block1", {
      // clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);",
      y: "-100%",
      duration: 1,
      stagger: 0.1,
      delay: 0.75,
      onStart: () =>
        gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" }),
    });

    tl.to([".nav", ".line h1", ".line p"], {
      y: "0%",
      duration: 1.5,
      stagger: 0.2,
    });
  });
  // useGSAP(() => {
  //   gsap.from(".fname", {
  //     x: -120,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power2.out",
  //     delay: 0.5,
  //   });
  //   gsap.from(".lname", {
  //     x: -120,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power2.out",
  //     delay: 0.7,
  //   });
  //   gsap.from(".pfp", { scale: 0.1, duration: 1, delay: 0.5, opacity: 0 });

  //   gsap.from("#begblu .char", {
  //     y: -100,
  //     stagger: 0.05,
  //     delay: 0.5,
  //     duration: 1,
  //     ease: "power4.out",
  //   });

  //   gsap.from("#aboutmenav", {
  //     x: -120,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power2.out",
  //     delay: 0.1,
  //   });

  //   gsap.from("#projectsnav", {
  //     x: -120,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power2.out",
  //     delay: 0.4,
  //   });

  //   gsap.from("#contactnav", {
  //     x: -120,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power2.out",
  //     delay: 0.7,
  //   });
  //   gsap.from("#eyeL", {
  //     x: -120,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power2.out",
  //     delay: 0,
  //   });
  // });

  // gsap.from("#abtmetext .char", {
  //   y: -300,
  //   stagger: 0.01,
  //   delay: 0.2,
  //   duration: 0.3,
  //   ease: "power4.out",
  // });
  return (
    <div className="">
      <div className="loader">
        <div className="overlay">
          <div className="block1"></div>
          <div className="block1"></div>
        </div>
        <div className="intro-logo">
          <div className="word" id="word-1">
            <h1>
              <span>Issac</span>
            </h1>
          </div>
          <div className="word" id="word-2">
            <h1>Lin</h1>
          </div>
        </div>

        <div className="divider"></div>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>

        <div className="counter">
          <div className="count">
            <div className="digit">
              <h1 id="dig1">0</h1>
            </div>
            <div className="digit">
              <h1 id="dig2">0</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>2</h1>
            </div>
            <div className="digit">
              <h1>1</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>6</h1>
            </div>
            <div className="digit">
              <h1>4</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>4</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>9</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container1 w-4/5 h-screen flex justify-center items-center mx-auto">
        <div className="hero-img">
          <img src="https://i8.amplience.net/i/naras/NewJeans_ADOR" alt="" />
        </div>

        <div className="nav">
          <div className="logo">
            <a href="#">il</a>
          </div>
          <div className="nav-links">
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Lookbook</a>
            <a href="#">Stories</a>
          </div>
          <div className="btn">
            <a href="#"></a>
          </div>
        </div>
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
      {/*<nav className="fixed left-4 top-4 flex items-center ">*/}
      {/*  <a*/}
      {/*    id="eyeL"*/}
      {/*    href="#"*/}
      {/*    className="text-caramel text-5xl font-bold font-abz "*/}
      {/*  >*/}
      {/*    il*/}
      {/*  </a>*/}
      {/*  <div className="flex ml-4">*/}
      {/*    <a*/}
      {/*      id="aboutmenav"*/}
      {/*      href="#abtme"*/}
      {/*      className="text-caramel text-base font-bold p-2 rounded-lg "*/}
      {/*    >*/}
      {/*      about me*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      id="projectsnav"*/}
      {/*      href="#projects"*/}
      {/*      className="text-caramel text-base font-bold p-2 rounded-lg "*/}
      {/*    >*/}
      {/*      projects*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      id="contactnav"*/}
      {/*      href="#"*/}
      {/*      className="text-caramel text-base font-bold p-2 rounded-lg "*/}
      {/*    >*/}
      {/*      contact*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</nav>*/}

      {/* <div className="w-4/5 h-screen flex justify-center items-center mx-auto">
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
      </div> */}
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
