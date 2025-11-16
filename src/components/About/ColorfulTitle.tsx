import { memo } from 'react';
import { TITLE_WORDS } from './constants';

/**
 * ColorfulTitle component - Displays "About Say Cheese Kids" with colors
 * Each word has a different color
 */
export const ColorfulTitle = memo(() => {
  return (
    <>
      {TITLE_WORDS.map((word, index) => (
        <span key={index}>
          <span className={`${word.color} font-bold`}>
            {word.text}
          </span>
          {index < TITLE_WORDS.length - 1 && ' '}
        </span>
      ))}
    </>
  );
});

ColorfulTitle.displayName = 'ColorfulTitle';

