import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  letterSpacing: '3px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '8px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '50px',
  },
}));