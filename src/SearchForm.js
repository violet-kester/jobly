/** SearchForm.
 *
 * Props: handleSearch
 *
 * State: formData
 *
 * [CompanyList, JobList] -> SearchForm
 */



function SearchForm({handleSearch}) {

  return (
    <div>
      <form>
        <input placeholder="Search"></input>
      </form>
    <button>Search!</button>
    </div>
  )
}

export default SearchForm;