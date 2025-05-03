import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "../contexts/User.Context";
import { useNavigate } from "react-router";


const initialForm = {
    email: "",
    password: "",
};

export const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const { email, password, onInputChange } = useForm(initialForm);

    const onLoginUser = (target) => {
        login({ email, password })

        navigate('/', { replace: true })
    }

    return (
        <>
            <div className="container vh-100 justify-content-center align-items-center">
                <div className="row w-100">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mx-auto">
                        <div className="card-body">
                            <h4 className="card-title text-center"> Login Page </h4>

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
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
};
