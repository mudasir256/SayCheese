import { memo } from 'react';
import Image from 'next/image';
import { DOCTOR_NAME, DOCTOR_DESCRIPTION, DOCTOR_IMAGE } from './constants';

/**
 * DoctorInfo component - Displays doctor information
 * Shows doctor avatar and description
 */
export const DoctorInfo = memo(() => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
          <Image
            src={DOCTOR_IMAGE}
            alt={DOCTOR_NAME}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{DOCTOR_NAME}</h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {DOCTOR_DESCRIPTION}
        </p>
      </div>
    </div>
  );
});

DoctorInfo.displayName = 'DoctorInfo';

