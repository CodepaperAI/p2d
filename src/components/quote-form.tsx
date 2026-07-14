"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { contact } from "@/lib/site-data";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  locationAndMessage: string;
  doorsAndDrawers: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  locationAndMessage: "",
  doorsAndDrawers: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Cabinet refinishing quote request from ${form.firstName} ${form.lastName}`.trim();
    const body = [
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Doors and drawers: ${form.doorsAndDrawers}`,
      "",
      "Location and project notes:",
      form.locationAndMessage,
      "",
      "Please attach project photos to this email before sending.",
    ].join("\n");

    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          First name
          <input
            required
            value={form.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            autoComplete="given-name"
          />
        </label>
        <label>
          Last name
          <input
            required
            value={form.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            autoComplete="family-name"
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
          />
        </label>
        <label>
          Phone
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
          />
        </label>
      </div>
      <label>
        How many doors and drawers?
        <input
          value={form.doorsAndDrawers}
          onChange={(event) => updateField("doorsAndDrawers", event.target.value)}
          placeholder="Example: 22 doors, 10 drawers"
        />
      </label>
      <label>
        Where are you located, and how can we help?
        <textarea
          required
          value={form.locationAndMessage}
          onChange={(event) => updateField("locationAndMessage", event.target.value)}
          rows={5}
          placeholder="Tell us your city, cabinet material, colour goals, and timeline."
        />
      </label>
      <button type="submit">
        Prepare email
        <span>
          <Send size={16} aria-hidden="true" />
        </span>
      </button>
    </form>
  );
}
