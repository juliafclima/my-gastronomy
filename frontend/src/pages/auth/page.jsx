import { useState } from "react";
import { Button, TextField } from "@mui/material";

import styles from "./page.module.css";

const commonSx = {
  input: {
    color: "var(--color-text-light)",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "var(--color-secondary)",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "var(--color-secondary-hover)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--color-secondary-hover)",
  },
  "& .MuiInputLabel-root": {
    color: "var(--color-text-light)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--color-text-light)",
  },
};

export default function Auth() {
  const [formType, setFormType] = useState("login");

  const handleChangeFormType = () => {
    formType === "login" ? setFormType("signup") : setFormType("login");
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {formType === "login" ? "Login" : "Sign up"}
        </h1>

        {formType === "login" && (
          <form className={styles.form} onSubmit={() => {}}>
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              onChange={() => {}}
              fullWidth
              margin="normal"
              variant="standard"
              sx={commonSx}
            />
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              onChange={() => {}}
              fullWidth
              margin="normal"
              variant="standard"
              sx={commonSx}
            />
            <Button
              type="submit"
              variant="contained"
              className={styles.submitButton}
            >
              Entrar
            </Button>
          </form>
        )}
        <button className={styles.toggleButton} onClick={handleChangeFormType}>
          {formType === "login"
            ? "Don't have an account? Click here"
            : "Already have an account? Click here"}
        </button>
      </div>
    </div>
  );
}
