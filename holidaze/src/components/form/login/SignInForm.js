import { Alert, Form, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { API } from "../../../constants/API";
import { setToken } from "../../../context/helpers";
import styles from "./SignInForm.module.css";

const SignIn = () => {
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        setToken(data.jwt);

        setUser(data.user);

        message.success(`Welcome back ${data.user.username}!`);

        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.login_form}>
        <div>
          <div title="SignIn">
            {error ? (
              <Alert
                className="alert_error"
                message={error}
                type="error"
                closable
                afterClose={() => setError("")}
              />
            ) : null}
            <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                className={styles.login_text}
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <input
                  placeholder="Email address"
                  className={styles.login_input}
                />
              </Form.Item>

              <Form.Item
                className={styles.login_text}
                label="Password"
                name="password"
                rules={[{ required: true }]}
              >
                <input placeholder="Password" className={styles.login_input} />
              </Form.Item>

              <Form.Item>
                <button
                  className={styles.login_button}
                  type="primary"
                  htmlType="submit"
                >
                  Login {isLoading}
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
