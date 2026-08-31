import Image from 'next/image';
import { assets } from '@/utils/assets';

export default function SideNav() {
  const { person, social, project } = assets;

  return (
    <div className="bg-[#34363A] fixed flex md:flex-col shadow-2xl gap-3 md:top-1/2 md:left-3 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 p-2 rounded-full bottom-0 md:bottom-[unset] flex-row left-1/2">
      <h1 className="hover:bg-background p-3 rounded-full">
        <Image src={person} className="w-5" alt="person" />
      </h1>
      <h1 className="hover:bg-background p-3 rounded-full">
        <Image src={project} className="w-5" alt="person" />
      </h1>
      <h1 className="hover:bg-background p-3 rounded-full">
        <Image src={social} className="w-5" alt="person" />
      </h1>
    </div>
  );
}
