import { memo } from 'react';
import Image from 'next/image';
import { DEFAULT_AVATAR } from './constants';
import type { ReviewAuthorProps } from './types';

/**
 * ReviewAuthor component - Displays review author info
 * Shows avatar, author name, and child information
 */
export const ReviewAuthor = memo<ReviewAuthorProps>(({ 
  author, 
  childName, 
  childAge, 
  avatarSrc = DEFAULT_AVATAR 
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 mt-4 w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
      <Image
        src={avatarSrc}
        alt={`${author}'s avatar`}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div>
        <p className="text-gray-800 font-semibold text-base text-center lg:text-left">
          {author}
        </p>
        <p className="text-gray-600 text-sm text-center lg:text-left">
          Parent of {childName}, age {childAge}
        </p>
      </div>
    </div>
  );
});

ReviewAuthor.displayName = 'ReviewAuthor';

