import Image from 'next/image';
import { assets } from '@/utils/assets';
import { projects } from '@/utils/projects';

export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="hero pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:mt-36">
          <div className="profile-text m-auto">
            <h3>
              <span className="bg-green-600 w-3 h-3 mr-2 inline-block rounded-full"></span>
              Available for hire
            </h3>
            <h1 className="text-4xl">
              Hi, I'm Mohammad Dawan Lutfi a
              <span className="text-gray-400"> Web Developer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, tempora quasi aliquid ex facere, corrupti suscipit
              animi at adipisci ut sit eaque voluptatibus similique. Impedit,
              eius. Suscipit placeat laudantium consequatur.
            </p>
            <div className="social flex gap-3 pt-5">
              <div className="py-1 px-3 rounded-full bg-card shadow-card hover:shadow-hover duration-300 transition-all ease-in-out">
                Instagram
              </div>
              <div className="py-1 px-3 rounded-full bg-card shadow-card hover:shadow-hover duration-300 transition-all ease-in-out">
                Instagram
              </div>
              <div className="py-1 px-3 rounded-full bg-card shadow-card hover:shadow-hover duration-300 transition-all ease-in-out">
                Instagram
              </div>
            </div>
          </div>
          <div className="image mt-auto">
            <div className="mx-auto w-1/2 rounded-2xl p-[2px] bg-gradient-to-bl from-green-600 via-transparent to-transparent overflow-hidden">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-background">
                <Image
                  src={assets.profile}
                  alt="profile"
                  className="rounded-2xl w-full h-auto object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
