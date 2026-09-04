import AboutMe from '@/components/about-me';
import Hero from '@/components/hero';
import MyWorks from '@/components/my-works';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutMe />
      <MyWorks />
    </div>
  );
}
