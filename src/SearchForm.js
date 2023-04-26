import { useState } from 'react';


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



function SearchForm({handleSearch, message}) {
  const [formData, setFormData] = useState({input: 'I am a form'});

  function handleChange(evt) {
    // const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData.input = value;
      // currData.isLoading =  false;
      return {...currData};
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData.input);
    setFormData({input: 'I am a form'});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='SearchForm-input'
          onChange={handleChange}
          placeholder="Search">
        </input>
        <input
          className='SearchForm-submit'
          type='submit'
          value={message}>
        </input>
      </form>
    </div>
  )
}

export default SearchForm;