/**
 * Self explanatory:
 * Login Component
 * Renders a login form with email, password, and agreement fields
 */

function Login() {
  return (
    <>
      {/* Using some bootstrap form border styling including a radius*/}
      <form className="border border-primary-subtle rounded">
        {/* Bootstrap small container size*/}
        <div className="form-group container-sm">
          <label for="exampleInputEmail1">Email address</label>
          {/* Using some bootstrap form controls and sizing*/}
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHint"
            placeholder="Enter your email address example@example.com"
          />
          {/* Using some bootstrap form controls and form text styling*/}
          <small id="emailHint" className="form-text text-muted ">
            If you are a new subscriber before login check the spam folder if
            you can't find the confirmation link sent to your email address
          </small>
        </div>
        <div className="form-group container-sm">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            aria-describedby="passwordHint"
            placeholder="Password"
          />
          <small id="passwordHint" className="form-text text-muted">
            Don't share your password or credentials with anyone
          </small>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Confirm reading and agreeing to our internal policies{" "}
            <a href="/">terms</a> and <a href="/">conditions</a>
          </label>
        </div>
        {/* Using some bootstrap button styling*/}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Login;
