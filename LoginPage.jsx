import { useState } from "react";

export default function LoginPage({ setPage }) {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const nav = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Enter a valid email address";
    if (!form.password) e.password = "Password is required";
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
    }, 1200);
  };

  return (
    <>
      <style>{`
        .auth-page {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #E9F5F5 0%, #fff 60%);
          padding: 90px 24px 40px;
        }
        .auth-card {
          background: #fff; border: 1px solid #D0E8E8; border-radius: 24px;
          padding: 44px 40px; width: 100%; max-width: 440px;
          box-shadow: 0 20px 64px rgba(10,147,150,.1);
        }
        .auth-brand {
          display: flex; align-items: center; gap: 10px; justify-content: center;
          margin-bottom: 30px; font-family: 'DM Serif Display', serif; font-size: 20px; color: #005F73;
        }
        .auth-brand-icon {
          width: 36px; height: 36px; background: #0A9396; border-radius: 9px;
          display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .auth-title { font-family: 'DM Serif Display', serif; font-size: 30px; color: #1A2B3C; text-align: center; margin-bottom: 6px; }
        .auth-sub { font-size: 14px; color: #4A6070; text-align: center; margin-bottom: 28px; }
        .social-btn {
          width: 100%; padding: 11px; border: 1.5px solid #D0E8E8; border-radius: 9px;
          background: #fff; font-size: 14px; font-weight: 500; color: #1A2B3C;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          gap: 10px; transition: all .2s; margin-bottom: 10px; font-family: 'Inter', sans-serif;
        }
        .social-btn:hover { background: #F7FBFB; border-color: #4A6070; }
        .auth-divider { display: flex; align-items: center; gap: 12px; margin: 18px 0; }
        .auth-divider span { font-size: 12px; color: #4A6070; white-space: nowrap; }
        .auth-divider::before,.auth-divider::after { content: ''; flex: 1; height: 1px; background: #D0E8E8; }
        .auth-form-group { margin-bottom: 18px; }
        .auth-label { display: block; font-size: 13px; font-weight: 600; color: #1A2B3C; margin-bottom: 7px; }
        .auth-input {
          width: 100%; padding: 11px 14px; border: 1.5px solid #D0E8E8; border-radius: 9px;
          font-size: 14px; font-family: 'Inter', sans-serif; color: #1A2B3C;
          background: #fff; outline: none; transition: border-color .2s, box-shadow .2s;
        }
        .auth-input:focus { border-color: #0A9396; box-shadow: 0 0 0 3px rgba(10,147,150,.1); }
        .auth-input.err { border-color: #AE2012; }
        .auth-err { font-size: 12px; color: #AE2012; margin-top: 4px; display: block; }
        .auth-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .remember-label { display: flex; gap: 8px; align-items: center; font-size: 13px; color: #4A6070; cursor: pointer; }
        .remember-label input { accent-color: #0A9396; cursor: pointer; }
        .forgot-link { font-size: 13px; color: #0A9396; font-weight: 600; cursor: pointer; background: none; border: none; font-family: 'Inter', sans-serif; }
        .forgot-link:hover { text-decoration: underline; }
        .auth-submit {
          width: 100%; padding: 13px; border-radius: 10px; border: none;
          background: #0A9396; color: #fff; font-size: 15px; font-weight: 700;
          cursor: pointer; font-family: 'Inter', sans-serif; transition: all .2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .auth-submit:hover:not(:disabled) { background: #005F73; transform: translateY(-1px); }
        .auth-submit:disabled { opacity: .7; cursor: not-allowed; }
        .auth-switch { text-align: center; font-size: 14px; color: #4A6070; margin-top: 24px; }
        .auth-switch-link { color: #0A9396; font-weight: 600; cursor: pointer; background: none; border: none; font-family: 'Inter', sans-serif; font-size: 14px; }
        .auth-switch-link:hover { text-decoration: underline; }
        .success-banner {
          background: #D8F3DC; border: 1px solid #74C69D; border-radius: 10px;
          padding: 14px 18px; font-size: 14px; color: #2D6A4F;
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        @media (max-width: 480px) { .auth-card { padding: 32px 22px; } }
      `}</style>

      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-brand">
            <div className="auth-brand-icon">🏥</div>
            MediConnect
          </div>
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-sub">Log in to your patient or doctor account</p>

          {success && (
            <div className="success-banner">
              ✅ Logged in successfully! Redirecting you…
            </div>
          )}

          <button className="social-btn">
            <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908C16.658 14.251 17.64 11.943 17.64 9.2Z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"/></svg>
            Continue with Google
          </button>
          <button className="social-btn">
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M14.28 9.56c-.02-2.1 1.72-3.12 1.8-3.17-1-1.44-2.52-1.64-3.06-1.66-1.3-.13-2.54.77-3.2.77-.66 0-1.68-.75-2.76-.73-1.42.02-2.73.83-3.46 2.1-1.48 2.56-.38 6.35 1.06 8.43.7 1.02 1.54 2.16 2.64 2.12 1.06-.04 1.46-.68 2.74-.68s1.64.68 2.76.66c1.14-.02 1.86-1.04 2.56-2.06.82-1.18 1.14-2.33 1.16-2.39-.03-.01-2.24-.86-2.24-3.39ZM12.1 3.22C12.66 2.54 13.04 1.6 12.94.64c-.85.04-1.88.57-2.48 1.28-.54.62-.98 1.6-.86 2.54.93.07 1.88-.46 2.5-1.24Z" fill="#000"/></svg>
            Continue with Apple
          </button>

          <div className="auth-divider"><span>or sign in with email</span></div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="auth-form-group">
              <label className="auth-label">Email Address</label>
              <input type="email" className={`auth-input${errors.email ? " err" : ""}`} placeholder="you@example.com" value={form.email} onChange={e => handleChange("email", e.target.value)}/>
              {errors.email && <span className="auth-err">{errors.email}</span>}
            </div>
            <div className="auth-form-group">
              <label className="auth-label">Password</label>
              <input type="password" className={`auth-input${errors.password ? " err" : ""}`} placeholder="Your password" value={form.password} onChange={e => handleChange("password", e.target.value)}/>
              {errors.password && <span className="auth-err">{errors.password}</span>}
            </div>
            <div className="auth-row">
              <label className="remember-label">
                <input type="checkbox" checked={form.remember} onChange={e => handleChange("remember", e.target.checked)}/>
                Remember me
              </label>
              <button type="button" className="forgot-link">Forgot password?</button>
            </div>
            <button type="submit" className="auth-submit" disabled={loading || success}>
              {loading ? "⏳ Signing you in…" : success ? "✅ Success!" : "Log In →"}
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <button className="auth-switch-link" onClick={() => nav("signup")}>Create one free →</button>
          </p>
        </div>
      </div>
    </>
  );
}