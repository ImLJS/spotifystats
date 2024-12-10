import Image from 'next/image';

export function HeroImage() {
  return (
    <div className="w-full md:max-w-[500px] xl:w-1/2">
      <Image
        src="/music.svg"
        height={500}
        width={500}
        alt="Music"
        className="mx-auto h-auto w-full"
        priority
      />
    </div>
  );
}
