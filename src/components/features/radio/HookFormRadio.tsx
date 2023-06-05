import { Controller } from 'react-hook-form';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { HookFormRadioProps } from './data';

const HookFormRadio = ({ control, defaultValue = '', name, options }: HookFormRadioProps) => {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <RadioGroup row {...field}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default HookFormRadio;
