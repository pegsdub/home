import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-screen overflow-scroll bg-white">
      <div className="h-screen flex flex-col justify-center items-center bg-white">
        <h1 className="z-50 lg:text-9xl md:text-7xl text-6xl text-center mb-14 text-black bg-clip-text font-light">
          nate pegram's resume
        </h1>
        <div className="bottom-6 flex justify-center items-center relative z-0 w-full max-w-lg bg-white">
          <div className=" absolute -top-56 left-10 w-48 h-48 rounded-full bg-red-600 mix-blend-multiply filter blur-md opacity-50 animate-blob animation-delay-2000"></div>
          <div className=" absolute left-64 w-48 h-48 rounded-full bg-yellow-300 mix-blend-multiply filter blur-md opacity-50 animate-blob"></div>
          <div className=" -bottom-52 left-10 absolute w-48 h-48 rounded-full bg-blue-600 mix-blend-multiply filter blur-md opacity-50 animate-blob animation-delay-4000"></div>
        </div>
        <div className="-m-2 py-3 px-5 font-light rounded-full lg:text-2xl md:text-lg base:text-sm bg-white transition duration-1000 ease-in-out flex flex-row items-center animate-bounce shadow-sm shadow-slate-800">
          <a
            href="https://soundcloud.com/pegsdub"
            target="_blank"
            rel="noreferrer noopener"
          >
            some sounds i made
          </a>
        </div>
      </div>

      <div
        id="whoiam"
        className="h-screen flex flex-col justify-center items-center m-6"
      >
        <div className="bg-white text-black">
          <div className=" flex items-center justify-center" id="whoiam">
            <div className="bg-transparent text-center lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-extralight mb-14 underline decoration-blue-600">
              i am a sales professional looking to transition to a more
              technical role such as sales engineering...
            </div>
          </div>
        </div>
        <div className="bg-white text-black">
          <div className="  flex items-center justify-center" id="whoiam">
            <div className="bg-transparent text-center lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-extralight mb-14 underline decoration-yellow-300">
              i've worked in business development roles 4+ years in an outbound
              capacity and taught myself "web development" to better understand
              application development...
            </div>
          </div>
        </div>
        <div className="bg-white text-black">
          <div className="  flex items-center justify-center" id="whoiam">
            <div className="bg-transparent text-center lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-extralight mb-14 underline decoration-red-600">
              i would love to connect and chat about potential opportunities...
            </div>
          </div>
        </div>
      </div>

      <h1 className="w-screen h-screen flex items-center justify-center text-center md:text-7xl sm:text-5xl text-5xl font-extralight mb-14 text-black">
        <div id="contactme">
          <a
            href="https://www.linkedin.com/in/nate-pegram"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="hover:text-neutral-400 transition duration-700 ease-in-out infinite text-center underline decoration-blue-600">
              linkedin
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </a>
          <br />
          <a
            href="https://www.github.com/pegsdub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="hover:text-neutral-400 transition duration-1000 animate-wiggle 1s ease-in-out infinite underline decoration-yellow-300">
              github
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </button>
            </div>
          </a>
          <br />
          <a
            href="https://www.calendly.com/nathan-pegram/introductory-meeting"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="hover:text-neutral-400 transition duration-1000 1s ease-in-out infinite underline decoration-red-600">
              let's chat!
              <button>
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </button>
            </div>
          </a>
        </div>
      </h1>
    </div>
  );
};

export default Hero;
