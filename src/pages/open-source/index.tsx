import {
  icBehance,
  icGithub,
  icLinkdin,
  icMail,
  imgProfile,
} from "../../assets";
import { DataProjectTeckStack, DataTeam } from "../../utils/constants";

const OpenSource = () => {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-5 md:px-0 space-y-24">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">
          Open Source
        </h1>
        <p className="text-secondary text-xs md:text-base">
          Ekspensify is a fully open-source project, offering complete access to
          its entire codebase. We encourage developers, contributors, and
          financial enthusiasts to collaborate on improving the platform.
          Whether it's adding new features, optimizing performance, fixing bugs,
          or enhancing the user experience, your contributions help shape a
          smarter and more efficient expense tracking solution.
        </p>
        <p className="text-secondary text-xs md:text-base">
          Below, you'll find access to all essential resources, allowing you to
          explore, modify, and contribute:
        </p>
        <ol
          style={{ listStyle: "initial" }}
          className="ps-4 flex  flex-wrap gap-x-5 gap-y-2 md:gap-5 items-center justify-between"
        >
          {[
            "Android Codebase",
            "Backend Codebase",
            "Figma Design",
            "Web Codebase",
          ].map((item, index) => (
            <li key={index}>
              <p className="text-secondary text-xs md:text-base">{item}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary">
          Meet the Team
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {DataTeam.map((item, index) => (
            <div
              key={index}
              style={{ boxShadow: "0 0 10px 7px #7F3DFF0D" }}
              className=" flex items-center gap-5 rounded-lg p-4"
            >
              <img
                src={imgProfile}
                alt="Profile Pic"
                className="w-20 md:w-24 aspect-square"
              />
              <div>
                <h4 className="text-sm md:text-lg font-semibold">
                  {item.name}
                </h4>
                <p className="text-secondary text-xs md:text-sm">{item.role}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icLinkdin}
                      alt="icon"
                      className="w-5 md:w-6 aspect-square"
                    />
                  </a>
                  <a
                    href={`mailto:${item.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icMail}
                      alt="icon"
                      className="w-5 md:w-6 aspect-square"
                    />
                  </a>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={icGithub}
                        alt="icon"
                        className="w-5 md:w-6 aspect-square"
                      />
                    </a>
                  )}
                  {item.behance && (
                    <a
                      href={item.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={icBehance}
                        alt="icon"
                        className="w-5 md:w-6 aspect-square"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary">
          Project Resource
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {DataProjectTeckStack.map((item, index) => (
            <div
              key={index}
              style={{ boxShadow: "0 0 10px 7px #7F3DFF0D" }}
              className=" flex flex-col justify-between gap-5 rounded-lg p-5"
            >
              <h3 className="text-base md:text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-secondary text-xs md:text-sm">{item.desc}</p>
              <div className="flex justify-between items-center  gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {item.technologies.map((item, index) => (
                    <img
                      src={item}
                      key={index}
                      alt="icon"
                      className="w-6 aspect-square"
                    />
                  ))}
                </div>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs   md:text-sm text-linkHover no-underline transition-colors duration-300"
                  >
                    Github <span className="text-lg md:text-xl">⤍</span>
                  </a>
                )}
                {item.figma && (
                  <a
                    href={item.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2  text-xs   md:text-sm text-linkHover no-underline transition-colors duration-300"
                  >
                    Figma <span className=" text-lg md:text-xl">⤍</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OpenSource;
