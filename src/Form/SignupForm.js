import { useState } from "react";

const INITIAL_FORM_DATA = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: ''
};

/** Form for signing up new user.
 *
 * Props:
 * - signup: function to call in parent.
 *
 * State:
 * - formData
 *
 * RoutesList -> {LoginForm, SignupForm} ->
 */

function SignupForm({ signup }) {
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
  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
    setFormData(INITIAL_FORM_DATA);
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>

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
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          onChange={handleChange}
          value={formData.password}
          aria-label="password"
          required
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
          minLength = "6"
          required
        />
      </div>

      <div className="mb-3">
        <button className="btn-primary btn SignupForm-addBtn">
          Submit
        </button>
      </div>

    </form>
  );
}

export default SignupForm;
