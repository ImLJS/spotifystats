import { HeroTitle } from './hero-title';
import { HeroImage } from './hero-image';

export function HeroSection() {
  return (
    <div className="flex flex-col items-center space-y-8 md:flex-col xl:flex-row xl:space-x-12 xl:space-y-0">
      <HeroTitle />
      <HeroImage />
    </div>
  );
}
