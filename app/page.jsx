import AboutMe from '@/components/about-me';
import Hero from '@/components/hero';
import MyWorks from '@/components/my-works';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutMe />
      <MyWorks />
    </div>
  );
}
