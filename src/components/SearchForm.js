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
        <Stack direction='row' spacing={2} m={2} justifyContent='center'>

          <TextField
            type='text'
            placeholder="Search"
            {...register('searchTerm')}
          />
          <StyledButton
            variant='contained'
            type='submit'
            size='large'
            startIcon={<Search />}
            disableElevation
          >
            {message}
          </StyledButton>

        </Stack>
      </form>
    </>
  );
}

export default SearchForm;