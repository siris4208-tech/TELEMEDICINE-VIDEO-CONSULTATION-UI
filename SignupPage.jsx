import { useState } from "react";

export default function SignupPage({ setPage }) {
  const [role, setRole] = useState("patient");
  const [form, setForm] = useState({ fname: "", lname: "", email: "", phone: "", password: "", specialty: "", regNo: "", agree: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const nav = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const getPwStrength = (pw) => {
    if (!pw) return { score: 0, label: "", color: "transparent", width: "0%" };
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    const colors = ["", "#AE2012", "#EE9B00", "#0A9396", "#2D6A4F"];
    const labels = ["", "Weak", "Fair", "Good", "Strong 💪"];
    return { score: s, label: labels[s], color: colors[s], width: `${s * 25}%` };
  };

  const strength = getPwStrength(form.password);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.fname.trim()) e.fname = "Required";
    if (!form.lname.trim()) e.lname = "Required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Enter a valid email";
    if (form.password.length < 8) e.password = "Minimum 8 characters required";
    if (!form.agree) e.agree = "You must accept the Terms & Privacy Policy";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => nav("home"), 1400);
    }, 1300);
  };

  const specialties = ["General Medicine","Cardiology","Dermatology","Neurology","Pediatrics","Orthopedics","Mental Health","Ophthalmology","Pulmonology","Endocrinology","Other"];

  return (
    <>
      <style>{`
        .signup-page {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #E9F5F5 0%, #fff 60%);
          padding: 90px 24px 40px;
        }
        .signup-card {
          background: #fff; border: 1px solid #D0E8E8; border-radius: 24px;
          padding: 44px 40px; width: 100%; max-width: 500px;
          box-shadow: 0 20px 64px rgba(10,147,150,.1);
        }
        .signup-brand {
          display: flex; align-items: center; gap: 10px; justify-content: center;
          margin-bottom: 28px; font-family: 'DM Serif Display', serif; font-size: 20px; color: #005F73;
        }
        .signup-brand-icon {
          width: 36px; height: 36px; background: #0A9396; border-radius: 9px;
          display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .signup-title { font-family: 'DM Serif Display', serif; font-size: 28px; color: #1A2B3C; text-align: center; margin-bottom: 6px; }
        .signup-sub { font-size: 14px; color: #4A6070; text-align: center; margin-bottom: 26px; }

        /* Role Toggle */
        .role-toggle {
          display: flex; background: #F7FBFB; border: 1px solid #D0E8E8;
          border-radius: 11px; padding: 4px; margin-bottom: 24px; gap: 4px;
        }
        .role-btn {
          flex: 1; padding: 10px 0; border: none; border-radius: 8px;
          background: transparent; color: #4A6070; font-weight: 600; font-size: 14px;
          cursor: pointer; transition: all .2s; font-family: 'Inter', sans-serif;
        }
        .role-btn.active { background: #0A9396; color: #fff; box-shadow: 0 2px 8px rgba(10,147,150,.25); }

        /* Form fields */
        .signup-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .signup-group { margin-bottom: 16px; }
        .signup-label { display: block; font-size: 13px; font-weight: 600; color: #1A2B3C; margin-bottom: 7px; }
        .signup-input, .signup-select {
          width: 100%; padding: 11px 14px; border: 1.5px solid #D0E8E8; border-radius: 9px;
          font-size: 14px; font-family: 'Inter', sans-serif; color: #1A2B3C;
          background: #fff; outline: none; transition: border-color .2s, box-shadow .2s;
        }
        .signup-input:focus, .signup-select:focus {
          border-color: #0A9396; box-shadow: 0 0 0 3px rgba(10,147,150,.1);
        }
        .signup-input.err { border-color: #AE2012; }
        .signup-err { font-size: 12px; color: #AE2012; margin-top: 4px; display: block; }

        /* Password strength */
        .pw-bar { height: 4px; border-radius: 3px; background: #D0E8E8; margin-top: 7px; overflow: hidden; }
        .pw-fill { height: 100%; border-radius: 3px; transition: all .3s; }
        .pw-label-text { font-size: 12px; font-weight: 600; margin-top: 4px; }

        /* Checkbox */
        .agree-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 20px; }
        .agree-row input { width: auto; margin-top: 2px; accent-color: #0A9396; cursor: pointer; flex-shrink: 0; }
        .agree-text { font-size: 13px; color: #4A6070; line-height: 1.5; }
        .agree-text a { color: #0A9396; font-weight: 600; cursor: pointer; text-decoration: none; }
        .agree-text a:hover { text-decoration: underline; }

        .signup-submit {
          width: 100%; padding: 13px; border-radius: 10px; border: none;
          background: #0A9396; color: #fff; font-size: 15px; font-weight: 700;
          cursor: pointer; font-family: 'Inter', sans-serif; transition: all .2s;
        }
        .signup-submit:hover:not(:disabled) { background: #005F73; transform: translateY(-1px); }
        .signup-submit:disabled { opacity: .7; cursor: not-allowed; }

        .signup-switch { text-align: center; font-size: 14px; color: #4A6070; margin-top: 22px; }
        .signup-switch-link { color: #0A9396; font-weight: 600; cursor: pointer; background: none; border: none; font-family: 'Inter', sans-serif; font-size: 14px; }
        .signup-switch-link:hover { text-decoration: underline; }

        .success-banner-su {
          background: #D8F3DC; border: 1px solid #74C69D; border-radius: 10px;
          padding: 14px 18px; font-size: 14px; color: #2D6A4F;
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .doctor-fields { border-top: 1px solid #D0E8E8; padding-top: 16px; margin-top: 4px; }
        .doctor-fields-label {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          color: #0A9396; margin-bottom: 14px;
        }

        @media (max-width: 480px) {
          .signup-card { padding: 32px 20px; }
          .signup-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="signup-page">
        <div className="signup-card">
          <div className="signup-brand">
            <div className="signup-brand-icon">🏥</div>
            MediConnect
          </div>
          <h2 className="signup-title">Create your account</h2>
          <p className="signup-sub">Start your first consultation in minutes — it's free</p>

          {success && (
            <div className="success-banner-su">
              🎉 Account created! Welcome to MediConnect. Redirecting…
            </div>
          )}

          {/* Role Toggle */}
          <div className="role-toggle">
            <button className={`role-btn${role === "patient" ? " active" : ""}`} onClick={() => setRole("patient")}>
              👤 I'm a Patient
            </button>
            <button className={`role-btn${role === "doctor" ? " active" : ""}`} onClick={() => setRole("doctor")}>
              🩺 I'm a Doctor
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="signup-row">
              <div className="signup-group">
                <label className="signup-label">First Name *</label>
                <input className={`signup-input${errors.fname ? " err" : ""}`} placeholder="Aarav" value={form.fname} onChange={e => handleChange("fname", e.target.value)}/>
                {errors.fname && <span className="signup-err">{errors.fname}</span>}
              </div>
              <div className="signup-group">
                <label className="signup-label">Last Name *</label>
                <input className={`signup-input${errors.lname ? " err" : ""}`} placeholder="Shah" value={form.lname} onChange={e => handleChange("lname", e.target.value)}/>
                {errors.lname && <span className="signup-err">{errors.lname}</span>}
              </div>
            </div>

            <div className="signup-group">
              <label className="signup-label">Email Address *</label>
              <input type="email" className={`signup-input${errors.email ? " err" : ""}`} placeholder="you@example.com" value={form.email} onChange={e => handleChange("email", e.target.value)}/>
              {errors.email && <span className="signup-err">{errors.email}</span>}
            </div>

            <div className="signup-group">
              <label className="signup-label">Phone Number</label>
              <input type="tel" className="signup-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => handleChange("phone", e.target.value)}/>
            </div>

            {/* Doctor-only fields */}
            {role === "doctor" && (
              <div className="doctor-fields">
                <div className="doctor-fields-label">Doctor Details</div>
                <div className="signup-group">
                  <label className="signup-label">Medical Registration No.</label>
                  <input className="signup-input" placeholder="MCI-123456" value={form.regNo} onChange={e => handleChange("regNo", e.target.value)}/>
                </div>
                <div className="signup-group">
                  <label className="signup-label">Specialty</label>
                  <select className="signup-select" value={form.specialty} onChange={e => handleChange("specialty", e.target.value)}>
                    <option value="">Select your specialty…</option>
                    {specialties.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            )}

            <div className="signup-group">
              <label className="signup-label">Password *</label>
              <input type="password" className={`signup-input${errors.password ? " err" : ""}`} placeholder="Min. 8 characters" value={form.password} onChange={e => handleChange("password", e.target.value)}/>
              <div className="pw-bar">
                <div className="pw-fill" style={{ width: strength.width, background: strength.color }}/>
              </div>
              {form.password && (
                <span className="pw-label-text" style={{ color: strength.color }}>{strength.label} password</span>
              )}
              {errors.password && <span className="signup-err">{errors.password}</span>}
            </div>

            <div className="agree-row">
              <input type="checkbox" id="agree" checked={form.agree} onChange={e => handleChange("agree", e.target.checked)}/>
              <label className="agree-text" htmlFor="agree">
                I agree to MediConnect's <a>Terms of Service</a> and <a>Privacy Policy</a>
              </label>
            </div>
            {errors.agree && <span className="signup-err" style={{marginTop:"-14px",marginBottom:"14px",display:"block"}}>{errors.agree}</span>}

            <button type="submit" className="signup-submit" disabled={loading || success}>
              {loading ? "⏳ Creating your account…" : success ? "✅ Account Created!" : "Create Account →"}
            </button>
          </form>

          <p className="signup-switch">
            Already have an account?{" "}
            <button className="signup-switch-link" onClick={() => nav("login")}>Log in →</button>
          </p>
        </div>
      </div>
    </>
  );
}