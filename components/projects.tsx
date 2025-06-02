import React from "react";
import Image from "next/image";
import { curve } from "@/app/assets";
import Link from "next/link";
import { gitProjects } from "@/app/data";

const Projects = () => {
  return (
    <>
      <section
        className="relative py-20 mt-32 md:mt-0 overflow-hidden"
        id="projects"
      >
        <div className="container px-4 mx-auto ">
          <h2 className="text-3xl text-center mb-7 font-bold tracking-tight my-4">
                    <span className="relative mx-auto z-10 inline-block">
                      Projects
                      <Image
                        alt="Curve"
                        src={curve}
                        className="absolute top-[110%] left-2 w-full xl:-m-2"
                        width={624}
                        height={28}
                      />
                    </span>
                  </h2>
          <div className="flex autoShow flex-wrap gap-10 mb-10">
            {gitProjects.map((Projects) => (
              <>
                <div
                  key={Projects.id}
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{ backgroundImage: `url(${Projects.card})` }}
                >
                  <div className="relative flex flex-col min-h-[22rem] p-[2.4rem]">
                    <h2 className="text-xl font-semibold text-primary mb-5">
                      {Projects.name}
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      {Projects.description}{" "}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {Projects.tag.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-slate-800 px-2 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={Projects.url}
                      className="text-primary hover:text-red-600 mt-auto"
                    >
                      Github
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
