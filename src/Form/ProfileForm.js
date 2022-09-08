import { useState, useEffect, useContext } from "react";
import userContext from '../Context/userContext';
import { useNavigate } from "react-router-dom";
import JoblyApi from '../utils/api';

const INITIAL_FORM_DATA = {
  username: '',
  firstName: '',
  lastName: '',
  email: ''
};

/** Form for displaying user profile.
 *
 * Props:
 * - update: function to call in parent.
 *
 * State:
 * - formData
 *
 * RoutesList -> ProfileForm ->
 */

function ProfileForm({ update }) {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  console.log('user context', user)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await update(formData);
      navigate("/companies");
    }
    catch {

    }
  }

  return (
    <form className="ProfileForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          className="form-control"
          onChange={handleChange}
          value={formData.username}
          aria-label="username"
          required
          disabled
        />
      </div>

      <div className="mb-3">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          className="form-control"
          onChange={handleChange}
          value={formData.firstName}
          aria-label="firstName"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          className="form-control"
          onChange={handleChange}
          value={formData.lastName}
          aria-label="lastName"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          className="form-control"
          onChange={handleChange}
          value={formData.email}
          aria-label="email"
          required
        />
      </div>

      <div className="mb-3">
        <button className="btn-primary btn ProfileForm-addBtn">
          Submit
        </button>
      </div>

    </form>
  );
}

export default ProfileForm;
