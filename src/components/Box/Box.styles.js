import { Box, styled } from '@mui/material';

export const GlassBox = styled(Box)({
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  padding: '24px',
  margin: '8px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'none',
  borderRadius: '8px',
  boxShadow: '0px 1px 3px 2px rgba(0, 0, 0, 0.1)',
});