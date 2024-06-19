"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrosoft,
  faInstagram,
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3,
  faBootstrap,
  faReact,
  faNodeJs,
  faExpress,
  faJsfiddle,
  faMdb as faMongodb,
  faJsSquare as faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faPaintBrush,
  faCode,
  faPen,
  faServer,
  faDatabase,
  faPalette,
  faArrowRight,
  faVideo,
  faLightbulb,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const skills = [
    { label: "HTML", percentage: 95, icon: faHtml5 },
    { label: "CSS", percentage: 95, icon: faCss3 },
    { label: "Bootstrap", percentage: 90, icon: faBootstrap },
    { label: "Tailwind CSS", percentage: 85, icon: faFileCode }, // TailwindCSS icon not available in free set, using Github icon as placeholder
    { label: "Javascript", percentage: 90, icon: faSquareJs }, // TailwindCSS icon not available in free set, using Github icon as placeholder
    { label: "ReactJS", percentage: 75, icon: faReact },
    { label: "NodeJS", percentage: 70, icon: faNodeJs },
    { label: "ExpressJS", percentage: 70, icon: faServer }, // ExpressJS icon not available in free set, using Server icon as placeholder
    { label: "NextJS", percentage: 45, icon: faJsfiddle }, // NextJS icon not available in free set, using Github icon as placeholder
    { label: "MongoDB", percentage: 60, icon: faDatabase },
  ];

  //87cd32

  return (
    <>
      <div className=" bg-[#eceaea]">
        {/* Navbar Content Start */}
        <nav className=" border-gray-200 dark:bg-gray-900 md:p-5 p-3 dark:border-gray-700 rounded">
          <div className="max-w-screen-lg flex flex-wrap items-center md:justify-around justify-between mx-auto p-4 bg-white md:mt-5 mt-4 rounded-lg">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse "
            >
              <p>
                <FontAwesomeIcon
                  icon={faMicrosoft}
                  style={{
                    color: "black",
                    fontSize: "1.7em",
                    marginTop: "3px",
                    borderRadius: "10px",
                  }}
                />
              </p>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Kesavan
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <a
                href="https://www.linkedin.com/in/kesavan-k-977023240"
                target="_blank"
                class="text-white bg-black follow-btn hover:bg-slate-900 focus:ring-4 focus:outline-none focus:border-none font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Follow Me
              </a>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between ${
                isMenuOpen ? "flex" : "hidden"
              } w-full md:flex md:w-auto`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-10 md:p-0 w-full mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-7 my-1 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about_me"
                    className="block py-2 px-7 my-1 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 "
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#my_projects"
                    className="block py-2 px-7 my-1 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 "
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact_me"
                    className="block py-2 px-7 my-1 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Navbar Content End */}

        {/* First Section Start */}
        <div className="first_section container ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 md:p-20 p-10 md:mx-10">
              <div>
                <div>
                  <p className="text-gray-500 font-bold md:text-5xl text-3xl">
                    Content Writer{" "}
                    <span className="text-black">
                      and <br className="sm:block hidden" /> Full Stack
                      Developer..{" "}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="my-6">
                    Hii There <b>I'm Kesavan Kangithan</b>, a skilled and
                    creative web developer and a content writer with a passion
                    for creating beautiful, responsive, and user-friendly
                    websites and a awesome content. I've worked on a variety of
                    web projects, ranging from personal blogs to e-commerce
                    platforms.
                  </p>
                </div>
                <div className="my-3">
                  <a
                    href="Kesavan-K-Resume.pdf"
                    download
                    className="bg-[black] font-semibold text-white p-1.5 hover:text-gray-100 rounded inline-block"
                  >
                    <button className="w-full h-full">Download CV</button>
                  </a>
                  <button className="text-black font-semibold bg-white p-1.5 hover:text-gray-700 md:mx-5 mx-2.5 rounded">
                    <a href="#my_projects"> View Work</a>
                  </button>
                </div>
                <div className="my-5 ml-1">
                  <a
                    href="https://www.instagram.com/mr_whitty?igsh=MXZhaGZ5YzVhb3dkZQ=="
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kesavan-k-977023240"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ margin: "0px 25px", fontSize: "20px" }}
                    />
                  </a>
                  <a href="https://github.com/Kesavan-K" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:flex lg:justify-center lg:items-center lg:h-full hidden">
              <img
                src="Image2.png"
                alt="No-Image"
                className="border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
      {/* First Section End */}

      {/* About Content Start */}
      <div id="about_me">
        <div className="">
          <h2 className="text-center md:text-4xl text-3xl font-bold md:py-10 py-5">
            About Me
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4 md:px-16 p-0 flex justify-center items-center">
          <div className="col-span-12 lg:col-span-6 md:p-16 p-7 md:mx-10 mx-0">
            <div className="lg:flex lg:justify-center lg:items-center lg:h-full ">
              <img
                src="About.png"
                alt="No-Image"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:mr-16 lg:p-0 px-7">
            <h2 className="font-bold md:text-3xl text-2xl">
              Skilled{" "}
              <span className="text-[rgb(97,107,241)]">Multitasker!!</span>{" "}
            </h2>
            <p className="mt-4 text-justify">
              Hello, I'm a passionate aspiring full-stack developer currently
              pursuing a B-Tech in Information Technology with a CGPA of 8.7,
              expected to graduate in 2025. I've honed my skills through Udemy
              courses in HTML, CSS, Bootstrap, and JavaScript, and I'm
              proficient in the MERN stack, Next.js, and Tailwind CSS. I have
              completed various projects using the MERN stack and am eager to
              tackle real-world challenges.Let's connect to explore how I can
              bring creativity, problem-solving skills, and a collaborative
              mindset to your team. I look forward to discussing further!
            </p>
            <div className="md:py-5 py-3">
              <div className="flex flex-col md:flex-row md:space-x-20">
                <a href="#" className="flex items-center mb-3 md:mb-0">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "rgb(97,107,241)", fontWeight: "bolder" }}
                  />
                  <span className="ml-1.5 font-semibold">Content Writer</span>
                </a>
                <a href="#" className="flex items-center mb-3 md:mb-0">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "rgb(97,107,241)", fontWeight: "bolder" }}
                  />
                  <span className="ml-1.5 font-semibold">Video Editor</span>
                </a>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-20">
                <a href="#" className="flex items-center mb-3 md:mb-0">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "rgb(97,107,241)", fontWeight: "bolder" }}
                  />
                  <span className="ml-1.5 font-semibold">Web Designer</span>
                </a>
                <a href="#" className="flex items-center mb-3 md:mb-0">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      color: "rgb(97,107,241)",
                      fontWeight: "bolder",
                    }}
                    className="md:ml-1.5"
                  />
                  <span className="ml-1.5 font-semibold">Poster Designer</span>
                </a>
              </div>
            </div>

            <div>
              <button className=" bg-[rgb(97,107,241)]  text-white p-1.5 hover:text-gray-50 rounded">
                <a
                  href="https://www.linkedin.com/in/kesavan-k-977023240"
                  target="_blank"
                >
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* About Content End */}

      {/* Skills Content Start */}
      <div className="bg-[#fafbfd] md:my-3 my-7">
        <div className="md:py-5 py-5">
          <p className="text-center font-bold md:text-4xl text-3xl md:hidden block">
            What I Do!
          </p>
        </div>

        <div className="py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-20 lg:px-48">
            <div className="flex justify-center items-center lg:text-3xl text-2xl font-semibold">
              <span className="md:block hidden">
                <span className="text-[rgb(97,107,241)]">The Expertise </span>I
                Possess!!
              </span>
            </div>

            {/* Web Developer Card */}
            <div className="p-7 border rounded-lg shadow-lg bg-white md:mx-0 mx-7">
              <FontAwesomeIcon
                icon={faCode}
                className="text-blue-500 bg-[#e5eefa] px-3 py-4  rounded-full  text-2xl mb-2"
              />
              {/* <div className="border-b-2 border-blue-500 w-9 mb-3"></div> */}
              <div className="">
                <h3 className="text-[25px] font-semibold my-3">
                  Web <span className="text-blue-600">Developer</span>
                </h3>
                <p className="text-md text-gray-800">
                  I excel in web development, combining technical expertise with
                  creative problem-solving to build responsive, user-friendly
                  websites that meet client objectives and user needs.
                </p>
              </div>
            </div>

            {/* Content Writer Card */}
            <div className=" p-7 border rounded-lg shadow-lg bg-white md:mx-0 mx-7">
              <FontAwesomeIcon
                icon={faPen}
                className="text-blue-500 bg-[#e5eefa] p-3  rounded-full  text-2xl mb-2"
              />
              {/* <div className="border-b-2 border-blue-500 w-9 mb-3"></div> */}
              <div className="">
                <h3 className="text-[25px] font-semibold my-3">
                  Content <span className="text-blue-600">Writer</span>
                </h3>
                <p className="text-md text-gray-800">
                  I excel in content writing, crafting compelling stories and
                  informative articles that engage and inform audiences. I
                  ensure each piece resonates deeply, leaving a lasting impact
                  on readers.
                </p>
              </div>
            </div>

            {/* Poster Designer Card */}
            <div className="p-7 border rounded-lg shadow-lg bg-white md:mx-0 mx-7">
              <FontAwesomeIcon
                icon={faPalette}
                className="text-blue-500 bg-[#e5eefa] p-3 rounded-full  text-2xl mb-2"
              />
              {/* <div className="border-b-2 border-blue-500 w-9 mb-3"></div> */}
              <div className="">
                <h3 className="text-[25px] font-semibold my-3">
                  Poster <span className="text-blue-600">Designer</span>
                </h3>
                <p className="text-md text-gray-800">
                  I excel in poster design, merging artistic creativity with
                  strategic visual communication to craft impactful artworks
                  that resonate with viewers and effectively convey intended
                  messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Content End */}

      {/* Project Section Start */}

      <div className="md:py-10 py-5 bg-[#fafbfd] " id="my_projects">
        <div className="text-center md:text-4xl text-3xl font-bold ">
          <p className="my-7">My Projects!</p>
        </div>
        <div className="">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4  md:px-20 lg:px-48">
            <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-0 mx-7">
              <a href="https://github.com/Kesavan-K" target="_blank">
                <img class="p-7 rounded-t-lg" src="1.png" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    CaterServ - Dream Events Web
                  </h5>
                </a>

                <div class="flex items-center my-2">
                  <span class="text-sm font-bold text-gray-500 dark:text-white">
                    HTML,CSS,JAVASCRIPT
                  </span>
                  <a href="#" class="text-blue-600 ml-2 mt-1">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-70 md:mx-0 mx-7">
              <a href="https://github.com/Kesavan-K" target="_blank">
                <img class="p-7 rounded-t-lg" src="2.png" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    VidyaMobiles - Mobile Store Web
                  </h5>
                </a>

                <div class="flex items-center my-2">
                  <span class="text-sm font-bold text-gray-500 dark:text-white">
                    HTML,CSS,JAVASCRIPT
                  </span>
                  <a href="#" class="text-blue-600 ml-2 mt-1">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-0 mx-7">
              <a href="https://github.com/Kesavan-K" target="_blank">
                <img class="p-7 rounded-t-lg" src="3.png" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    BackGround - Color FLipper Web
                  </h5>
                </a>

                <div class="flex items-center my-2">
                  <span class="text-sm font-bold text-gray-500 dark:text-white">
                    HTML,CSS,JAVASCRIPT
                  </span>
                  <a href="#" class="text-blue-600 ml-2 mt-1">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-0 mx-7">
              <a href="https://github.com/Kesavan-K" target="_blank">
                <img class="p-7 rounded-t-lg" src="4.png" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Speech Recognition - Dynamic
                  </h5>
                </a>

                <div class="flex items-center my-2">
                  <span class="text-sm font-bold text-gray-500 dark:text-white">
                    MERN Stack
                  </span>
                  <a href="#" class="text-blue-600 ml-2 mt-1">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-0 mx-7">
              <a href="https://github.com/Kesavan-K" target="_blank">
                <img class="p-7 rounded-t-lg" src="5.png" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Login Authentication using JWT
                  </h5>
                </a>

                <div class="flex items-center my-2">
                  <span class="text-sm font-bold text-gray-500 dark:text-white">
                    Mern Stack
                  </span>
                  <a href="#" class="text-blue-600 ml-2 mt-1">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-0 mx-7">
              <a href="https://github.com/Kesavan-K" target="_blank">
                <img class="p-7 rounded-t-lg" src="6.png" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    PayPal Integration - Demo Account
                  </h5>
                </a>

                <div class="flex items-center justify-between my-2">
                  <div>
                    <span class="text-sm font-bold text-gray-500 dark:text-white">
                      MERN Stack
                    </span>
                    <a href="#" class="text-blue-600 ml-2 mt-1">
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </div>

                  <div className="text-sm font-bold text-blue-500 hover:text-blue-800 cursor-pointer dark:text-white mr-5">
                    <a href="https://github.com/Kesavan-K" target="_blank">
                      {" "}
                      Know More
                    </a>{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section End  */}

      {/* Contact Section Start */}
      <div className="bg-[whitesmoke] md:px-16 px-0" id="contact_me">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16  md:px-20">
          <div className=" w-full space-y-4">
            <div className="font-semibold text-2xl lg:hidden block  text-center lg:my-0 my-7">
              <p>Skills Level</p>
            </div>
            <div className="flex justify-center items-center min-h-screen w-full md:p-0 p-7">
              <div className="flex flex-col justify-center items-center w-96">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4 w-full">
                    <div className="flex justify-between mb-1 space-y-4">
                      <span className="text-base font-medium text-black dark:text-white">
                        <FontAwesomeIcon
                          icon={skill.icon}
                          className="mr-2 text-gray-600"
                        />
                        <span className="font-semibold">{skill.label}</span>
                      </span>
                      <span className="text-sm font-medium text-blue-900 dark:text-white space-y-4">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full rounded-md h-2.5 bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-2.5 rounded bg-slate-400 hover:bg-gray-500 cursor-pointer hover:transition-all"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <section className=" dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-full">
              <h2 className="mb-4 md:text-4xl text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Me
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 md:text-[19px]">
                If you want to stay connected with me, feel free to send me a
                message.
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-md font-semibold text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="youremail@gamil.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    className="block mb-2 text-md font-semibold text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let mr know how can i help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    className="block mb-2 text-md font-semibold text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="py-2 px-3 font-medium text-sm bg-black hover:bg-slate-800 text-white border rounded-md "
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section End */}

      {/* Footer Section Start */}

      <footer className="p-5 font-semibold">
        <div className="flex justify-around md:flex-row flex-col ">
          <p className="text-center">
            {" "}
            &copy; Copyright -{" "}
            <span className="text-gray-500"> All Rights Reserved </span>
          </p>
          <p className="text-center">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/kesavan-k-977023240"
              target="_blank"
              className="text-gray-500 hover:text-gray-600"
            >
              Kesavan K
            </a>{" "}
          </p>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  );
};

export default Page;
