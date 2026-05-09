

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const STATUS = { IDLE: "idle", SENDING: "sending", OK: "ok", ERR: "err" };

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errors, setErrors] = useState({});

  /* ── Validation ── */
  function validate(data) {
    const e = {};
    if (!data.from_name.trim())  e.from_name  = "Name is required.";
    if (!data.from_email.trim()) e.from_email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email))
      e.from_email = "Enter a valid email address.";
    if (!data.message.trim())    e.message    = "Message cannot be empty.";
    return e;
  }

  /* ── Submit ── */
  async function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    const data = {
      from_name:  form.from_name.value,
      from_email: form.from_email.value,
      message:    form.message.value,
    };

    const errs = validate(data);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setErrors({});
    setStatus(STATUS.SENDING);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus(STATUS.OK);
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERR);
    }
  }

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.inner}>
        {/* Heading */}
        <div style={styles.heading}>
          <span style={styles.label}>Get in touch</span>
          <h2 style={styles.title}>Let's work together</h2>
          <p style={styles.sub}>
            Have a project in mind? Fill out the form and I'll get back to you
            within 24 hours.
          </p>
        </div>

        {/* Card */}
        <div style={styles.card}>
          {status === STATUS.OK ? (
            <SuccessBanner onReset={() => setStatus(STATUS.IDLE)} />
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div style={styles.row}>
                <Field
                  label="Name"
                  name="from_name"
                  type="text"
                  placeholder="Jane Smith"
                  error={errors.from_name}
                />
                <Field
                  label="Email"
                  name="from_email"
                  type="email"
                  placeholder="jane@example.com"
                  error={errors.from_email}
                />
              </div>

              <Field
                label="Message"
                name="message"
                as="textarea"
                placeholder="Tell me about your project…"
                error={errors.message}
                rows={6}
              />

              {status === STATUS.ERR && (
                <p style={styles.errBanner}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === STATUS.SENDING}
                style={{
                  ...styles.btn,
                  ...(status === STATUS.SENDING ? styles.btnDisabled : {}),
                }}
              >
                {status === STATUS.SENDING ? (
                  <>
                    <Spinner /> Sending…
                  </>
                ) : (
                  "Send message →"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────────── */

function Field({ label, name, as = "input", error, rows, ...rest }) {
  const [focused, setFocused] = useState(false);
  const Tag = as;
  return (
    <div style={styles.field}>
      <label htmlFor={name} style={styles.fieldLabel}>
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...styles.input,
          ...(as === "textarea" ? styles.textarea : {}),
          ...(focused ? styles.inputFocused : {}),
          ...(error ? styles.inputError : {}),
        }}
        {...rest}
      />
      {error && <span style={styles.fieldErr}>{error}</span>}
    </div>
  );
}

function SuccessBanner({ onReset }) {
  return (
    <div style={styles.success}>
      <span style={styles.successIcon}>✓</span>
      <h3 style={styles.successTitle}>Message sent!</h3>
      <p style={styles.successText}>
        Thanks for reaching out. I'll be in touch soon.
      </p>
      <button onClick={onReset} style={styles.resetBtn}>
        Send another
      </button>
    </div>
  );
}

function Spinner() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 14,
        height: 14,
        border: "2px solid rgba(255,255,255,0.4)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
        marginRight: 8,
      }}
    />
  );
}

/* ── Styles ──────────────────────────────────────────────────────────────────
   Uses CSS custom properties so it inherits your existing theme vars.
   Falls back to sensible values if the vars aren't defined.
*/
const styles = {
  section: {
    padding: "96px 24px",
    background: "var(--color-bg, #0f0f0f)",
  },
  inner: {
    maxWidth: 760,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 48,
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--color-accent, #7c6af7)",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    color: "var(--color-text, #f0f0f0)",
  },
  sub: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.7,
    color: "var(--color-muted, #888)",
  },
  card: {
    background: "var(--color-surface, #1a1a1a)",
    border: "1px solid var(--color-border, #2a2a2a)",
    borderRadius: 16,
    padding: "40px 36px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: 500,
    color: "var(--color-text, #f0f0f0)",
    letterSpacing: "0.02em",
  },
  input: {
    background: "var(--color-bg, #0f0f0f)",
    border: "1px solid var(--color-border, #2a2a2a)",
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: 14,
    color: "var(--color-text, #f0f0f0)",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  inputFocused: {
    borderColor: "var(--color-accent, #7c6af7)",
    boxShadow: "0 0 0 3px var(--color-accent-alpha, rgba(124,106,247,0.18))",
  },
  inputError: {
    borderColor: "#e55",
  },
  textarea: {
    resize: "vertical",
    minHeight: 120,
  },
  fieldErr: {
    fontSize: 12,
    color: "#e55",
    marginTop: 2,
  },
  errBanner: {
    background: "rgba(220,50,50,0.1)",
    border: "1px solid rgba(220,50,50,0.3)",
    borderRadius: 8,
    padding: "12px 16px",
    fontSize: 13,
    color: "#e88",
    marginBottom: 20,
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--color-accent, #7c6af7)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "13px 28px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity 0.15s, transform 0.1s",
    fontFamily: "inherit",
  },
  btnDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  success: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    padding: "24px 0",
    textAlign: "center",
  },
  successIcon: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "rgba(100,220,150,0.12)",
    border: "1px solid rgba(100,220,150,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    color: "#5de0a0",
    lineHeight: "56px",
  },
  successTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 700,
    color: "var(--color-text, #f0f0f0)",
  },
  successText: {
    margin: 0,
    fontSize: 15,
    color: "var(--color-muted, #888)",
  },
  resetBtn: {
    marginTop: 8,
    background: "transparent",
    border: "1px solid var(--color-border, #2a2a2a)",
    borderRadius: 8,
    padding: "9px 20px",
    fontSize: 13,
    color: "var(--color-text, #f0f0f0)",
    cursor: "pointer",
    fontFamily: "inherit",
  },
};