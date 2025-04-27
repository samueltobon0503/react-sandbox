import { useContext } from "react"
import { UserContext } from "../contexts/User.Context";
import { useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";

const initialForm = {
    email: "",
    password: ""
}

export const Loginpage = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const {email, password, onInputChange} = useForm(initialForm); 

     const onLoginUser = (_target) => {
        login({ email, password })
        navigate('/', {replace: true});
     };

        return (
          <>
            <div className="container vh-100 justify-content-center align-items-center">
              <div className="row w-100">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="card-body">
                    <h4 className="card-title text-center"> Login Page </h4>
      
                    <form>
                      <div className="form-group">
                        <label> Email </label>
                        <input 
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={email}
                          onChange={onInputChange}
                          placeholder="Enter user email"
                        />
                      </div>
                      <div className="form-group">
                        <label> Password </label>
                        <input 
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={password}
                          onChange={onInputChange}
                          placeholder="Enter password"
                        />
                      </div>
      
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                          onClick={onLoginUser}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-3">
                </div>
              </div>
            </div>
          </>
        );
}


