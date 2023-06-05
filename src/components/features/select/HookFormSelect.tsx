import { Select, MenuItem } from '@mui/material';
import { HookFormSelectProps } from './data';

const HookFormSelect = ({
  defaultValue = '',
  register,
  setValue,
  options,
  size = 'small',
  name,
}: HookFormSelectProps) => {
  return (
    <>
      <Select
        defaultValue={defaultValue}
        size={size}
        fullWidth
        {...register(name)}
        onChange={(e) => {
          if (e.target.value) setValue(name, e.target.value);
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default HookFormSelect;
