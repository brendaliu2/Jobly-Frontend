import { useState } from "react";

/** Form for searching companies.
 *
 * Props:
 * - search: function to call in parent.
 *
 * State:
 * - formData
 *
 * RoutesList -> {CompanyList, JobList} -> {SearchForm}
 */

function SearchForm({ search }) {
  const [formData, setFormData] = useState({ name: "" });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
    setFormData({ name: "" });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-md-6">
          <form className="SearchForm" onSubmit={handleSubmit}>

            <div className="mb-3">
              <input
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter search term.."
                onChange={handleChange}
                value={formData.name}
                aria-label="name"
              />
            </div>

            <div className="mb-3">
              <button className="btn-primary btn SearchForm-addBtn btn-lg">
                Submit
              </button>
            </div>

          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default SearchForm;
