/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import { MenuItem, InputAdornment } from '@mui/material';
import {
  StyledFormControl,
  StyledFormHelperText,
  TextFieldsWrapper,
  StyledLabel,
  StyledSelect,
} from '../styled/styled';

const DxSelectField = ({
  name,
  label,
  control,
  options = [],
  placeholder,
  startIcon,
  endIcon,
  errorMessage,
  type,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextFieldsWrapper>
          <StyledLabel htmlFor={label}>{label}</StyledLabel>
          <StyledFormControl error={!!errorMessage}>
            <StyledSelect
              {...field}
              multiple={type === 'multiple'}
              displayEmpty
              startAdornment={
                startIcon && (
                  <InputAdornment position="start">{startIcon}</InputAdornment>
                )
              }
              endAdornment={
                endIcon && (
                  <InputAdornment position="end">{endIcon}</InputAdornment>
                )
              }
              
              {...props}
            >
              <MenuItem disabled value="">
                <>{placeholder}</>
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
            <StyledFormHelperText>{errorMessage}</StyledFormHelperText>
          </StyledFormControl>
        </TextFieldsWrapper>
      )}
    />
  );
};

export default DxSelectField;
