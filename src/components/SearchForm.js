import { useState } from 'react';
import "./SearchForm.css";

/** SearchForm.
 *
 * Props:
 * - handleSearch
 * - message
 *
 * State: formData
 *
 * [CompanyList, JobList] -> SearchForm
 */



function SearchForm({ handleSearch, message }) {
  const [formData, setFormData] = useState({ input: '' });

  /** Detects change in form input, and updates formData */
  function handleChange(evt) {
    const value = evt.target.value;

    setFormData(currData => {
      currData.input = value;
      return { ...currData };
    });
  }

  /** Calls handleSearch in parent component, and clears formData*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    await handleSearch(formData.input);
    // setFormData({ input: '' });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='SearchForm-input'
          onChange={handleChange}
          placeholder="Search"
          value={formData.input}>
        </input>
        <input
          className='SearchForm-submit'
          type='submit'
          value={message}>
        </input>
      </form>
    </div>
  );
}

export default SearchForm;