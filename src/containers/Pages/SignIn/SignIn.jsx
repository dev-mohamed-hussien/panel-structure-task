import React from "react";
import styles from "./SignIn.module.css"; // Import css modules stylesheet as styles
import { useForm } from "../../../hooks/useForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../../../redux/actions";
import { useHistory } from "react-router-dom";

// Styled component named StyledButton
const LoginWrapper = styled.div`
  background-image: url("https://primexbt.com/my/id-bg.b5174bd50bea8cea.jpg");
  // font-size: 32px;
  color: white;
  align-items: center;
  padding: 0 60px;
  display: flex;
  position: relative;

  height: 100vh;
  .box-login {
    background: rgb(0 0 0 / 63%);
    width: 370px;
    height: 520px;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    box-sizing: border-box;
    border-raduis: 10px;
    border: 0.5px solid rgba(196, 196, 196, 0.6);
  }
  @media (max-width: 700px) {
    .box-login {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
  }
  .logo {
    position: absolute;
    top: 50px;
    left: 60px;
  }
  .footer {
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 50px;
    right: 30px;
  }
`;

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    handleSubmit, // handles form submission
    handleChange, // handles input changes
    data, // access to the form data
    errors, // includes the errors to show
  } = useForm({
    // the hook we are going to create
    validations: {
      // all our validation rules go here
      email: {
        pattern: {
          value: "^[A-Za-z]*$",
          message: "You're not allowed to...",
        },
        required: {
          value: true,
          message: "field is required",
        },
      },
      password: {
        pattern: {
          value: "^[A-Za-z]*$",
          message: "You're not allowed to...",
        },
        required: {
          value: true,
          message: "field is required",
        },
      },
    },
    onSubmit: (values) => {
      dispatch(onLogin("thisIsJWTToken", data));
      window.location.href = "/admin";

      // history.push("/admin");
    },
    initialValues: {
      email: "John",
    },
  });

  return (
    <LoginWrapper>
      <div className="logo">
        <img src="https://primexbt.com/my/assets/images/logo.svg" width="146" />
      </div>
      <div className="footer">
        <div>
          <img src="https://primexbt.com/my/assets/icons/ssl.svg" width="114" />
        </div>
        <div>
          <img
            src="https://primexbt.com/my/assets/icons/amazon.svg"
            width="114"
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   console.log("hello");
        // }}
      >
        <div className="box-login">
          <div className={styles["id-card-header"]}>Login</div>
          <div className={styles.new}>
            {" "}
            New to PrimeXBT? <a> Register </a>
          </div>
          <div className={styles["label-float"]}>
            <input
              name="email"
              type="text"
              value={data.email || ""}
              onChange={handleChange("email")}
              placeholder=" "
            />
            <label>Email</label>
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <br />
          <div className={styles["label-float"]}>
            <input
              name="password"
              type="text"
              value={data.password || ""}
              onChange={handleChange("password")}
              placeholder=" "
            />
            <label>Password</label>
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>

          <div className={styles["id-forgot-password"]}>
            <a href="/id/password-recovery">Forgot password?</a>
          </div>

          <div className={styles["label-float"]}>
            <button htmlType="submit">submit</button>
          </div>
        </div>
      </form>
    </LoginWrapper>
  );
}
//
