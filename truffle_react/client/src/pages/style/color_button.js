import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';


const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'coral',
    borderColor: 'coral',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#ba000d',
      borderColor: '#ba000d',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ba000d',
      borderColor: '#ba000d',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem coral',
    },
  });

  
  export default BootstrapButton;