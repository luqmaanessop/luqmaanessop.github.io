import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { PageTransition } from "app/components/PageTransition";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <PageTransition>
      <section className="flex-1 w-full container-text">
        <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {project.title}
                  </span>
                  <span className="text-neutral-600 text-neutral-400 tabular-nums text-sm">
                    {project.year}
                  </span>
                </div>
                <p className="prose prose-neutral dark:prose-invert pt-3">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
