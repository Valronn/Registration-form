import React from "react";

export default class UserRegistration extends React.Component {
  render() {
    const {
      onSubmitCreateUser,
      onChangeUsername,
      value,
      onChangePassword,
      onChangeAge,
      onChangeLastName,
      onChangeFirstName,
      onChangeEmail,
      onChangePasswordConfirm
    } = this.props;
    return (
      <div className="container register">
        <div className="row">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <form onSubmit={onSubmitCreateUser}>
                <label htmlFor="username">
                  <h5>Your username: </h5>
                </label>
                <input
                  value={value.username}
                  onChange={onChangeUsername}
                  id="username"
                  type="text"
                  className={!value.usernameValidated ? "form-control is-invalid mb-2" : "form-control mb-2"}
                  placeholder="available A-z 0-9"
                />
                <div className='invalid-feedback'>{value.UserNameErrors}</div>
                <label htmlFor="passwordConfirm">
                  <h5>Your password: </h5>
                </label>
                <input
                  onChange={onChangePassword}
                  value={value.password}
                  id="passwordConfirm"
                  type="password"
                  className={!value.passwordValidated ? "form-control is-invalid mb-2": "form-control mb-2"}
                  placeholder="min. 8 characters"
                />
                <div className='invalid-feedback'>{value.passwordError}</div>
                <label htmlFor="password">
                  <h5>Confirm password: </h5>
                </label>
                <input
                  onChange={
                    onChangePasswordConfirm}
                  value={value.passwordConfirm}
                  id="password"
                  type="password"
                  className={!value.passwordMatchingValidated ? "form-control is-invalid mb-2": "form-control mb-2"}
                />
                <div className='invalid-feedback'>{value.passwordMatchingError}</div>
                <label htmlFor="email">
                  <h5>Your email address: </h5>
                </label>
                <input
                  onChange={onChangeEmail}
                  value={value.email}
                  id="email"
                  type="email"
                  className="form-control mb-2"
                  placeholder="ex. test@example.com"
                />
                <label htmlFor="firstName">
                  <h5>Your first name: </h5>
                </label>
                <input
                  onChange={onChangeFirstName}
                  value={value.firstName}
                  id="firstName"
                  type="text"
                  className="form-control mb-2"
                />
                <label htmlFor="lastName">
                  <h5>Your last name: </h5>
                </label>
                <input
                  onChange={onChangeLastName}
                  value={value.lastName}
                  id="lastName"
                  type="text"
                  className="form-control mb-2"
                />
                <label htmlFor="age">
                  <h5>Your age: </h5>
                </label>
                <input
                  onChange={onChangeAge}
                  value={value.age}
                  id="age"
                  type="number"
                  className="form-control mb-2"
                />
                <button
                  type="submit"
                  className="btn btn-md btn-primary btn-block mt-4"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
