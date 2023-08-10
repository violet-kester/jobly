import { useForm } from 'react-hook-form';
import {
  Stack,
  TextField,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import StyledButton from './Button/Button';

/** SearchForm ----------------------------------------------------
 *
 * Props:
 * - handleSearch: search function to be called in App component
 * - message: search button text
 *
 * State: formData
 *
 * Component hierarchy:
 * [CompanyList, JobList] -> SearchForm
 *
 */

function SearchForm({ handleSearch, message }) {
  const {
    handleSubmit,
    register,
  } = useForm('');

  async function onSubmit(data) {
    console.log("data:", data.searchTerm)
    await handleSearch(data.searchTerm);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack
        direction='row'
        spacing={2}
        justifyContent='center'
        sx={{
          width: {
            xs: '350px',
            md: '600px',
          },
          margin: '16px auto',
        }}>

          <TextField
            type='text'
            placeholder={message}
            size='small'
            {...register('searchTerm')}
          />
          <StyledButton
            variant='contained'
            type='submit'
            startIcon={<Search />}
            disableElevation
          >
            Search
          </StyledButton>

        </Stack>
      </form>
    </>
  );
}

export default SearchForm;