import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      {/* <div>
        <strong>Gross Income</strong>
        "(Salary and Other Income)"
      </div> */}
      <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      {/* <i>₹</i> */}
      <input
        type="password"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
