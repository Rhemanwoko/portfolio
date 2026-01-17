"use client";

import { useState } from "react";
import { Mail, Loader2, AlertCircle } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/personal";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // spam protection
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Email validation regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate individual field
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Name is required";
        }
        if (value.trim().length < 2) {
          return "Name must be at least 2 characters";
        }
        if (value.length > 100) {
          return "Name must be less than 100 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          return "Email is required";
        }
        if (!isValidEmail(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "message":
        if (!value.trim()) {
          return "Message is required";
        }
        if (value.trim().length < 10) {
          return "Message must be at least 10 characters";
        }
        if (value.length > 5000) {
          return "Message must be less than 5000 characters";
        }
        break;
    }
    return undefined;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.name = validateField("name", formData.name);
    newErrors.email = validateField("email", formData.email);
    newErrors.message = validateField("message", formData.message);

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  // Handle field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  // Handle field blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        I'm available for frontend development roles and freelance projects. Let's connect!
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 block w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.name && touched.name
                    ? "border-destructive focus:border-destructive focus:ring-destructive"
                    : "border-input focus:border-primary focus:ring-primary"
                }`}
                aria-invalid={errors.name && touched.name ? "true" : "false"}
                aria-describedby={errors.name && touched.name ? "name-error" : undefined}
              />
              {errors.name && touched.name && (
                <p id="name-error" className="mt-1 flex items-center gap-1 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 block w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.email && touched.email
                    ? "border-destructive focus:border-destructive focus:ring-destructive"
                    : "border-input focus:border-primary focus:ring-primary"
                }`}
                aria-invalid={errors.email && touched.email ? "true" : "false"}
                aria-describedby={errors.email && touched.email ? "email-error" : undefined}
              />
              {errors.email && touched.email && (
                <p id="email-error" className="mt-1 flex items-center gap-1 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 block w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.message && touched.message
                    ? "border-destructive focus:border-destructive focus:ring-destructive"
                    : "border-input focus:border-primary focus:ring-primary"
                }`}
                aria-invalid={errors.message && touched.message ? "true" : "false"}
                aria-describedby={errors.message && touched.message ? "message-error" : undefined}
              />
              {errors.message && touched.message && (
                <p id="message-error" className="mt-1 flex items-center gap-1 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  {errors.message}
                </p>
              )}
              <p className="mt-1 text-xs text-muted-foreground">
                {formData.message.length}/5000 characters
              </p>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {status === "success" && (
              <div className="rounded-md bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-400">
                {errorMessage || "Failed to send message. Please try again."}
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold">Connect on Social</h3>
              <div className="mt-4 space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name} →
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="text-sm font-semibold">Availability</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Currently available for frontend development roles and freelance projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
