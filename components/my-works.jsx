import React from 'react';
import Image from 'next/image';
import { projects } from '@/utils/projects';

const MyWorks = () => {
  return (
    <section className="my-works">
      <h1 className="text-3xl text-center after:content-[''] after:w-1/4 after:h-1 after:block after:m-auto after:rounded-full after:bg-foreground after:mt-2 pb-3">
        My Works
      </h1>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <div
            className="card p-3 shadow-card bg-card rounded-xl"
            key={project.id}
          >
            <div className="tags">
              <h4 className="border border-foreground rounded-full px-3 py-1 w-fit mb-3">
                Project
              </h4>
              <div className="card-image mb-3">
                <Image
                  src={project.image}
                  alt="project Thumb"
                  className="rounded-xl h-24 md:h-72 object-cover md:object-fill"
                />
              </div>
              <div className="card-body">{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
