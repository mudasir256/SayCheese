import { memo } from 'react';
import Image from 'next/image';
import { CHARACTERS } from './constants';

/**
 * HeroCharacters component - Side characters (princess and superhero)
 * Positioned absolutely on left and right sides
 */
export const HeroCharacters = memo(() => {
  return (
    <>
      {CHARACTERS.map((character) => (
        <div key={character.id} className={character.position}>
          <Image
            src={character.src}
            alt={character.alt}
            width={character.width}
            height={character.height}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      ))}
    </>
  );
});

HeroCharacters.displayName = 'HeroCharacters';

