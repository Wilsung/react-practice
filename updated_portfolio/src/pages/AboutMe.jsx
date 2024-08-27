import React from "react";
import Skills from "../components/Skills";
import aboutme from "../aboutme";

export default function AboutMePage() {
  return (
    <section>
      <h1 className="title">About Me</h1>
      <hr />
      <div className="py-8 space-y-4 md:space-y-6">
        <p>
          Front-End Web Developer with over 5 years of working experience.
          Always learning and fueled by challenges that expand my knowledge. I
          enjoy the process of developing a website or application and seeing it
          come to fruition. When I'm not on the computer, I like to spend my
          time listening to music or keeping fit at the Pickleball courts.
        </p>
        <p>Here are some relevant technologies I have experience with:</p>
      </div>

      <div className="w-full md:w-11/12 bg-[#131f24] mx-auto p-2 sm:p-4 lg:p-6 text-xd sm:text-sm md:text-base lg:text-lg">
        <div className="flex sm:flex-row flex-col items-baseline justify-around *:w-full *:sm:w-auto about_title">
          {aboutme.length > 0 &&
            aboutme.map((skill) => (
              <Skills
                key={skill.title}
                title={skill.title}
                description={skill.description}
                color={skill.bgColor}
              />
            ))}
        </div>
      </div>

      <div className="flex justify-center gap-8 text-2xl py-10">
        <a
          href="https://www.linkedin.com/in/wilson-ung-34962a78/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin fa-xl" aria-hidden="true" />
        </a>

        <a
          href="https://github.com/Wilsung"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-github fa-xl" aria-hidden="true" />
        </a>

        <a
          href="https://codepen.io/lolwilson94/pens/public"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-codepen fa-xl" aria-hidden="true" />
        </a>

        <a
          href="https://www.freecodecamp.org/wilsung"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-free-code-camp fa-xl" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
