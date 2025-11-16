import { memo } from 'react';
import { FOOTER_SECTION_TITLE } from './constants';
import type { FooterSectionProps } from './types';

/**
 * FooterSection component - Reusable section container for footer
 * Provides consistent styling and structure
 */
export const FooterSection = memo<FooterSectionProps>(({ title, children }) => {
  return (
    <div>
      <h3 className={FOOTER_SECTION_TITLE}>{title}</h3>
      <div className="space-y-3.5 lg:space-y-3 text-[15px]">{children}</div>
    </div>
  );
});

FooterSection.displayName = 'FooterSection';

