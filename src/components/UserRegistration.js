import React from "react";

export default class UserRegistration extends React.Component {
  render() {
    return (
      <div className="container register">
        <div className="row">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <form>
                <label htmlFor="username">
                  <h5>Your username: </h5>
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-control mb-2"
                  placeholder="available A-z 0-9"
                />
                <label htmlFor="password">
                  <h5>Your password: </h5>
                </label>
                <input
                  id="password"
                  type="text"
                  className="form-control mb-2"
                  placeholder="min. 8 characters"
                />
                <label htmlFor="email">
                  <h5>Your email address: </h5>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control mb-2"
                  placeholder="ex. test@example.com"
                />
                <label htmlFor="firstName">
                  <h5>Your first name: </h5>
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="form-control mb-2"
                />
                <label htmlFor="lastName">
                  <h5>Your last name: </h5>
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control mb-2"
                />
                <label htmlFor="age">
                  <h5>Your age: </h5>
                </label>
                <input id="age" type="number" className="form-control mb-2" />
                <label htmlFor='image'><h5>Your photo: </h5></label>
                <div className="custom-file" id='image'>
                  <input
                    type="file"
                    className="form-control custom-file-input mb-2"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label className="custom-file-label" for="inputGroupFile01">
                    Choose file
                  </label>
                </div>
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
