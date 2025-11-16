import { useState, useCallback } from 'react';
import type { AppointmentFormData } from '../types';

/**
 * Custom hook for appointment form handling
 * Manages form state and submission
 */
export const useAppointmentForm = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    parentName: '',
    childName: '',
    phone: '',
    age: '',
    email: '',
    appointmentType: '',
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(() => {
    console.log('Appointment booked:', formData);
    alert('Appointment request submitted!');
    // Here you would typically send the data to your backend
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({
      parentName: '',
      childName: '',
      phone: '',
      age: '',
      email: '',
      appointmentType: '',
    });
  }, []);

  return {
    formData,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

