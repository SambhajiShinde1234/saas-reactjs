import {
  styled,
  Box,
  Stack,
  Typography,
  Drawer,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

// charts

export const StyledChartBox = styled(Box)(() => ({
  height: '300px',
}));

// icons

export const StyledIconBox = styled(Box)(() => ({
  background: '#FFF',
  borderRadius: '50px',
  padding: '0.2rem',
  outline: '2px solid #EBEFF0',
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
  fontWeight: '700',
}));

export const StyledSecondaryTypography = styled(Typography)(() => ({
  color: '#A0A4A3',
  fontWeight: '500',
}));

// sidebar

export const StyledLogoBox = styled(Box)(({ theme }) => ({
  margin: '2rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    margin: '2rem 0 1rem 0',
  },
}));

export const StyledLogo = styled('span')(() => ({
  fontSize: '2rem',
  fontWeight: '900',
}));

export const StyledLogoPro = styled(StyledLogo)(() => ({
  color: '#1FC28B',
}));

export const StyledListeitemIcon = styled(ListItemIcon)(({ isactive }) => ({
  color: isactive ? '#FFF' : '#A0A4A3',
}));

export const StyledListeitemText = styled(Typography)(({ isactive }) => ({
  color: isactive ? '#FFF' : '#A0A4A3',
  fontWeight: '600',
  fontSize: '1rem',
}));

export const StyledListItemButton = styled(ListItemButton)(({ isactive }) => ({
  background: isactive ? '#1FC28B' : '',
  borderRadius: '12px',
  '&:hover': {
    background: isactive ? '#1FC28B' : '', // Provide fallback for hover when inactive
  },
}));

// layout

export const StyledLayoutBox = styled(Box)(({ isMobileScreen }) => ({
  display: 'flex',
  minHeight: '100vh',
  margin: isMobileScreen ? '0rem' : '1rem',
}));

export const StyledDrawer = styled(Drawer)(({ drawerwidth }) => ({
  width: drawerwidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerwidth,
    boxSizing: 'border-box',
    border: 'none',
  },
}));

export const StyledMainBox = styled(Box)(({ drawerwidth, isMobileScreen }) => ({
  flexGrow: 1,
  width: `calc(100% - ${drawerwidth}px)`,
  background: '#F2F8F8',
  borderRadius: isMobileScreen ? '0px' : '40px',
  padding: '1.5rem',
}));

export const StyledChildrenBox = styled(Box)(() => ({
  margin: '2rem 0 0 0 ',
}));

// cards

export const StyledCard = styled(Box)(() => ({
  padding: '20px',
  background: '#FFF',
  borderRadius: '18px',
  outline: '2px solid #EBEFF0',
}));

export const StyledCardStack = styled(Stack)(() => ({
  gap: '1em',
}));
