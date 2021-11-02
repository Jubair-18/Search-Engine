import React, { useEffect ,useState} from 'react';
import InputUnstyled from '@mui/core/InputUnstyled';
import { styled } from '@mui/system';
import { useDebounce } from 'use-debounce'
import { Box, Button } from '@mui/material'
import './style.css';
import { useStateContext } from './context';

const StyledInputElement = styled('input')`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;



const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function Search() {
    const [text , setText ] = useState('')
    const { searchTerm, setSearchTerm } = useStateContext();
    const [debouncedValue] = useDebounce(text, 300);
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return(
    <Box style={{ display: "flex", flexDirection: "row"}}>
      <CustomInput aria-label="Demo input" placeholder="Search something..." value={text}  onChange={e => setText(e.target.value)}/>
      <Button onClick={() => setText('')}> x </Button>
    </Box>
  );
}
