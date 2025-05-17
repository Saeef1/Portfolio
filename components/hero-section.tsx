"use client";
import { Button } from "@/components/ui/button";
import Buttons from "./Button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Typewriter from "typewriter-effect";


export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              I am
              <Typewriter
              options={{
                strings: ["Web Developer","UI/UX Designer","Next.js Developer"],
                autoStart: true,
                loop: true,
              }}
            />
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              I build exceptional digital experiences with modern web technologies, focusing on performance, accessibility, and beautiful design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Buttons href="#projects" className="" >
                <span className="flex items-center gap-2 ">
                View Projects <ArrowRight className="ml-23 rounded-full h-4 w-4" />                                
                </span>
              </Buttons>
              <Buttons href="" white className="text-black rounded-full bg-white">
                Contact Me
              </Buttons>
            </div>
            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Saeef1" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/muhammad-saeef-96781928a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:muhammadsaeef045@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto md:ml-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl" />
            <div className="relative h-full w-full rounded-full border border-border/50 bg-background p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="font-mono text-sm text-muted-foreground mb-4">// code snippet</div>
                <pre className="text-left text-sm p-4 rounded-lg overflow-hidden">
                  <code>
                    <span className="text-blue-500">const</span>{" "}
                    <span className="text-yellow-500">developer</span> ={" "}
                    {`{`}
                    <br />
                    {"  "}
                    <span className="text-green-500">name</span>:{" "}
                    <span className="text-orange-500">'Muhammad Saeef'</span>,
                    <br />
                    {"  "}
                    <span className="text-green-500">skills</span>:{" "}
                    [<span className="text-orange-500">'Next.js'</span>,{" "}
                    <span className="text-orange-500">'React'</span>,{" "}
                    <span className="text-orange-500">'TypeScript'</span>,{" "}
                    <span className="text-orange-500">'Phython'</span>
                    ]
                    <br />
                    {"  "}
                    <span className="text-green-500">passion</span>:{" "}
                    <span className="text-orange-500">'Building amazing UIs'</span>
                    <br />
                    {`}`};
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}