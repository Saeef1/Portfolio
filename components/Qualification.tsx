import { qualification } from "@/app/data";
import React from "react";
import { curve } from "@/app/assets";
import Image from "next/image";
const Qualification = () => {
  return (
    <>
      <section
        id="Qualifications"
        className="relative pt-20 md:mt-3 mt-32 overflow-hidden"
      >
        <div className="container px-4 mx-auto ">
          <h2 className="text-3xl text-center mb-7 font-bold tracking-tight my-4">
            <span className="relative mx-auto z-10 inline-block">
              Qualifications
              <Image
                alt="Curve"
                src={curve}
                className="absolute top-[110%] left-2 w-full xl:-m-2"
                width={624}
                height={28}
              />
            </span>
          </h2>
          <div className="w-full h-auto flex flex-col gap-4 ">
            {qualification.map((qual) => (
              <>
                <div
                  key={qual.id}
                  className="h-auto w-full bg-slate-900 p-4 rounded-lg"
                >
                  <div className="w-full my-2   hover:border-white/20 hover:duration-400 duration-300 border-2 p-4 rounded-lg">
                    <div className="flex justify-between w-full ">
                      <h3 className="text-2xl font-bold mb-2">
                        {qual.title}
                      </h3>
                      <span className="text-muted-foreground text-sm">
                        {"~"}
                        {qual.since}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{qual.name}</h3>
                    <p className="text-muted-foreground">{qual.description}</p>
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

export default Qualification;
