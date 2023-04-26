import { useState } from 'react';


/** SearchForm.
 *
 * Props: handleSearch
 *
 * State: formData
 *
 * [CompanyList, JobList] -> SearchForm
 */



function SearchForm({handleSearch}) {
  const [formData, setFormData] = useState({input: 'I am a form', isLoading: true});


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
    setFormData({input: 'I am a form', isLoading: true});
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
          value='Search for Company!'>
        </input>
      </form>
    </div>
  )
}

export default SearchForm;