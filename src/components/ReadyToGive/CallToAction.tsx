import { memo } from 'react';
import Link from 'next/link';
import Button from '../Button';
import {
  SECTION_TITLE,
  SECTION_TITLE_LINE2,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  SECTION_DESCRIPTION,
  BUTTON_TEXT,
  TEXT_CONTAINER,
  TITLE_CLASSES,
  DESCRIPTION_CLASSES,
} from './constants';

/**
 * CallToAction component - Main CTA text and button
 * Displays compelling message with phone number
 * Memoized for performance
 */
export const CallToAction = memo(() => {
  return (
    <div className={TEXT_CONTAINER}>
      <h2 className={TITLE_CLASSES}>
        {SECTION_TITLE}
        <br className="hidden lg:block" />
        {SECTION_TITLE_LINE2}
      </h2>
      <p className={DESCRIPTION_CLASSES}>
        Call us at <span className="font-semibold">{PHONE_DISPLAY}</span> and see why families
        throughout Chino, Chino Hills, and the Inland Empire trust Say Cheese Kids with their
        children&apos;s smiles.
      </p>
      <div className="flex justify-center">
        <a 
          href={`tel:${PHONE_NUMBER}`}
          aria-label={`Call us at ${PHONE_DISPLAY}`}
        >
          <Button text={BUTTON_TEXT} size="lg" rounded="full" variant="pink" />
        </a>
      </div>
    </div>
  );
});

CallToAction.displayName = 'CallToAction';

