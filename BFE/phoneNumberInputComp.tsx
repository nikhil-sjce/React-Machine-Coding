
import React, { useState } from 'react';

export function PhoneNumberInput() {
  const [value, setValue] = useState("");

  const inputSanitization = (input: string): string => {
    const digits = input
      .split('')
      .filter((c) => c >= '0' && c <= '9')
      .join('');

    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)})${digits.slice(3)}`;
    return `(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = inputSanitization(e.target.value);
    setValue(formattedValue);
  };

  return (
    <input
      data-testid="phone-number-input"
      value={value}
      onChange={handleChange}
      maxLength={14}
    />
  );
}
