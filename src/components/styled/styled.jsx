import { styled, Box, Stack, Typography, ListItemText } from '@mui/material';

// icons

export const StyledIconBox = styled(Box)(() => ({
  background: '#FFF',
  borderRadius: '50px',
  padding: '0.2rem',
}));

// flex
export const StyledFlexCenter = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
}));

export const StyledFlexBetween = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
}));

// typography

export const StyledPrimaryTypography = styled(Typography)(() => ({
  color: '#292A3B',
  fontWeight: '900',
}));

export const StyledSecondaryTypography = styled(Typography)(() => ({
  color: '#A0A4A3',
  fontWeight: '600',
}));

// sidebar

export const StyledLogo = styled(Box)(() => ({
  height: '3.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledListeitemText = styled(Typography)(() => ({
  color: '#A0A4A3',
  fontWeight: '600',
  fontSize: '0.9rem',
  fontFamily: 'monospace',
}));
