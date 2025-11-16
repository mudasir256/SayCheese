import { memo } from 'react';
import Button from '../Button';
import { useAppointmentForm } from './hooks/useAppointmentForm';
import {
  FORM_TITLE_LINE1,
  FORM_TITLE_LINE2,
  FORM_SUBTITLE,
  SUBMIT_BUTTON_TEXT,
  APPOINTMENT_TYPES,
  FORM_CARD,
  FORM_TITLE,
  FORM_SUBTITLE_CLASSES,
  INPUT_BASE,
} from './constants';

/**
 * AppointmentForm component - Booking form for dental appointments
 * Handles form state and submission
 */
export const AppointmentForm = memo(() => {
  const { formData, handleChange, handleSubmit } = useAppointmentForm();

  return (
    <div className={FORM_CARD}>
      <h2 className={`${FORM_TITLE} mb-1`}>{FORM_TITLE_LINE1}</h2>
      <h2 className={`${FORM_TITLE} mb-3`}>{FORM_TITLE_LINE2}</h2>
      
      <p className={FORM_SUBTITLE_CLASSES}>
        {FORM_SUBTITLE.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        ))}
      </p>

      <div className="space-y-3">
        <input
          type="text"
          name="parentName"
          placeholder="Parent/Guardian Name"
          value={formData.parentName}
          onChange={handleChange}
          className={INPUT_BASE}
          aria-label="Parent or Guardian Name"
        />

        <input
          type="text"
          name="childName"
          placeholder="Child Name"
          value={formData.childName}
          onChange={handleChange}
          className={INPUT_BASE}
          aria-label="Child's Name"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={INPUT_BASE}
          aria-label="Phone Number"
        />

        <input
          type="text"
          name="age"
          placeholder="Child's Age"
          value={formData.age}
          onChange={handleChange}
          className={INPUT_BASE}
          aria-label="Child's Age"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={INPUT_BASE}
          aria-label="Email Address"
        />

        <div className="relative">
          <select
            name="appointmentType"
            value={formData.appointmentType}
            onChange={handleChange}
            className={INPUT_BASE}
            aria-label="Select Appointment Type"
          >
            {APPOINTMENT_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M6 9L1 4h10z" />
            </svg>
          </div>
        </div>

        <div className="mt-2">
          <Button
            text={SUBMIT_BUTTON_TEXT}
            onClick={handleSubmit}
            fullWidth={true}
            size="lg"
            rounded="full"
            variant="yellow"
          />
        </div>
      </div>
    </div>
  );
});

AppointmentForm.displayName = 'AppointmentForm';

