import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ fname: "", lname: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fname.trim()) e.fname = "First name is required";
    if (!form.lname.trim()) e.lname = "Last name is required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "A valid email is required";
    if (!form.message.trim()) e.message = "Please enter your message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const contactItems = [
    { icon: "📍", title: "Head Office", text: "12th Floor, Prestige Tech Park, Outer Ring Road, Bengaluru 560103" },
    { icon: "📞", title: "Phone Support", text: "+91 80 4567 8900 · Mon–Sat, 8 AM – 9 PM IST" },
    { icon: "✉️", title: "Email", text: "support@mediconnect.health" },
    { icon: "🚨", title: "Medical Emergencies", text: "Call 112 immediately — do not use this form for emergencies." },
  ];

  return (
    <>
      <style>{`
        .contact-page-wrap { max-width: 1100px; margin: 0 auto; padding: 80px 48px; }
        .contact-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #0A9396; margin-bottom: 12px;
        }
        .contact-title {
          font-family: 'DM Serif Display', serif; font-size: clamp(28px, 4vw, 44px);
          color: #1A2B3C; margin-bottom: 14px; line-height: 1.15;
        }
        .contact-sub { font-size: 17px; color: #4A6070; line-height: 1.65; max-width: 520px; margin-bottom: 56px; }

        .contact-grid { display: grid; grid-template-columns: 1fr 1.7fr; gap: 56px; }

        /* Left panel */
        .contact-info-title {
          font-family: 'DM Serif Display', serif; font-size: 24px;
          color: #1A2B3C; margin-bottom: 14px;
        }
        .contact-info-intro { font-size: 15px; color: #4A6070; line-height: 1.7; margin-bottom: 32px; }
        .contact-item { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 26px; }
        .contact-icon {
          width: 46px; height: 46px; min-width: 46px; background: #E9F5F5;
          border-radius: 11px; display: flex; align-items: center; justify-content: center; font-size: 22px;
        }
        .contact-item-title { font-size: 12px; font-weight: 700; color: #1A2B3C; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 1px; }
        .contact-item-text { font-size: 14px; color: #4A6070; line-height: 1.55; }

        /* Form panel */
        .contact-form-box {
          background: #F7FBFB; border: 1px solid #D0E8E8;
          border-radius: 20px; padding: 40px;
        }
        .contact-form-title { font-size: 20px; font-weight: 700; color: #1A2B3C; margin-bottom: 28px; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { margin-bottom: 18px; }
        .form-label { display: block; font-size: 13px; font-weight: 600; color: #1A2B3C; margin-bottom: 7px; }
        .form-input, .form-textarea, .form-select {
          width: 100%; padding: 11px 14px; border: 1.5px solid #D0E8E8; border-radius: 9px;
          font-size: 14px; font-family: 'Inter', sans-serif; color: #1A2B3C;
          background: #fff; outline: none; transition: border-color .2s, box-shadow .2s;
        }
        .form-input:focus, .form-textarea:focus, .form-select:focus {
          border-color: #0A9396; box-shadow: 0 0 0 3px rgba(10,147,150,.1);
        }
        .form-input.err-input, .form-textarea.err-input { border-color: #AE2012; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .err-text { font-size: 12px; color: #AE2012; margin-top: 4px; display: block; }
        .form-submit {
          width: 100%; padding: 13px; border-radius: 10px; border: none;
          background: #0A9396; color: #fff; font-size: 15px; font-weight: 700;
          cursor: pointer; font-family: 'Inter', sans-serif; transition: all .2s;
        }
        .form-submit:hover { background: #005F73; transform: translateY(-1px); }
        .success-banner {
          background: #D8F3DC; border: 1px solid #74C69D; border-radius: 12px;
          padding: 20px 22px; font-size: 15px; color: #2D6A4F;
          display: flex; align-items: flex-start; gap: 12px; line-height: 1.5;
        }
        .success-icon { font-size: 22px; flex-shrink: 0; }

        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) {
          .contact-page-wrap { padding: 40px 20px; }
          .contact-form-box { padding: 24px; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-page-wrap">
        <div className="contact-eyebrow">Get in Touch</div>
        <h1 className="contact-title">We're here to help</h1>
        <p className="contact-sub">Questions about your account, technical issues, or partnerships? Our team responds within 24 hours.</p>

        <div className="contact-grid">
          {/* LEFT */}
          <div>
            <h3 className="contact-info-title">Contact information</h3>
            <p className="contact-info-intro">Reach us through any channel below, or fill out the form and we'll reply by the next business day.</p>
            {contactItems.map(item => (
              <div className="contact-item" key={item.title}>
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-item-title">{item.title}</div>
                  <p className="contact-item-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — FORM */}
          <div className="contact-form-box">
            <div className="contact-form-title">Send us a message</div>

            {submitted ? (
              <div className="success-banner">
                <span className="success-icon">✅</span>
                <div>
                  <strong>Message sent successfully!</strong><br/>
                  We'll get back to you at <strong>{form.email}</strong> within 24 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input className={`form-input${errors.fname ? " err-input" : ""}`} placeholder="Aarav" value={form.fname} onChange={e => handleChange("fname", e.target.value)}/>
                    {errors.fname && <span className="err-text">{errors.fname}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input className={`form-input${errors.lname ? " err-input" : ""}`} placeholder="Shah" value={form.lname} onChange={e => handleChange("lname", e.target.value)}/>
                    {errors.lname && <span className="err-text">{errors.lname}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className={`form-input${errors.email ? " err-input" : ""}`} placeholder="aarav@example.com" value={form.email} onChange={e => handleChange("email", e.target.value)}/>
                  {errors.email && <span className="err-text">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select className="form-select" value={form.subject} onChange={e => handleChange("subject", e.target.value)}>
                    <option value="">Select a topic…</option>
                    <option>Account or billing query</option>
                    <option>Technical issue</option>
                    <option>Doctor / consultation feedback</option>
                    <option>Partnership inquiry</option>
                    <option>Press / media</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea className={`form-textarea${errors.message ? " err-input" : ""}`} placeholder="Describe your question or issue in detail…" value={form.message} onChange={e => handleChange("message", e.target.value)}/>
                  {errors.message && <span className="err-text">{errors.message}</span>}
                </div>
                <button type="submit" className="form-submit">Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
