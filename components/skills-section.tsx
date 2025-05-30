"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { curve } from "@/app/assets";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Server, Workflow, Layers } from "lucide-react";
import { BackgroundCircles } from "@/app/design/Hero";
import { ScrollParallax } from "react-just-parallax";

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "APIs", "GraphQL", "Authentication", "Authorization"],
  },
  {
    name: "Development",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["Git", "GitHub", "Testing", "Performance Optimization", "SEO"],
  },
  {
    name: "Architecture",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      "Microservices",
      "Serverless",
      "API Design",
      "System Design",
      "Performance Optimization",
    ],
  },
  {
    name: "DevOps",
    icon: <Workflow className="h-6 w-6" />,
    skills: [, "Vercel"],
  },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  const parallaxRef = useRef<HTMLDivElement>(null);
  return (
    <section id="skills" className=" py-6 h-auto ">
      <div className="container px-4 mx-auto " ref={parallaxRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            <span className="relative z-10 inline-block">
              Technical Skills
              <Image
                alt="Curve"
                src={curve}
                className="absolute top-[110%] left-2 w-full xl:-m-2"
                width={624}
                height={28}
              />
            </span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical expertise and proficiency
            in Next.js and modern web development.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "flex flex-col items-center justify-center z-20 p-4 rounded-lg transition-all duration-300",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-card/80"
              )}
            >
              {category.icon}
              <span className="mt-2 font-medium">{category.name}</span>
            </button>
          ))}
        </div>
        <div className="relative h-[1.4rem] aspect-[33/40] w-full">
          <div className="grid grid-cols-1 gap-8 ">
            {skillCategories
              .filter((category) => category.name === activeCategory)
              .map((category) => (
                <Card
                  key={category.name}
                  className="overflow-hidden border border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      {category.icon}
                      <h3 className="text-xl font-semibold">
                        {category.name} Skills
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 ">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="px-3 py-1 text-sm "
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            <ScrollParallax isAbsolutelyPositioned>
              <div className=" relative ">
                <BackgroundCircles parallaxRef={parallaxRef} />
              </div>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
