"use client";

import { FormEvent, useState } from "react";

type Locale = "fr" | "en";

const initialState = {
  name: "",
  phone: "",
  service: "",
  message: ""
};

const formCopy = {
  fr: {
    name: "Nom",
    phone: "Téléphone",
    service: "Prestation souhaitée",
    choose: "Choisir une prestation",
    services: ["Onglerie", "Soin visage", "Massage & bien-être", "Beauté du regard", "Épilation"],
    message: "Message",
    placeholder: "Précisez votre disponibilité ou votre besoin.",
    note: "Ce formulaire front est prêt pour un futur branchement vers un CRM ou un système de réservation.",
    submit: "Envoyer la demande",
    success: "Merci, votre demande a bien été préparée. Il reste à brancher ce formulaire à votre outil de réception."
  },
  en: {
    name: "Name",
    phone: "Phone",
    service: "Desired service",
    choose: "Choose a service",
    services: ["Nails", "Facial treatment", "Massage & wellness", "Lash and brow beauty", "Waxing"],
    message: "Message",
    placeholder: "Share your availability or your request.",
    note: "This form is ready for a future connection to a CRM or booking system.",
    submit: "Send request",
    success: "Thank you, your request has been prepared. The form can now be connected to your reception tool."
  }
};

export function ContactForm({ locale = "fr" }: { locale?: Locale }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const content = formCopy[locale];

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    setFormData(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="glass-panel p-7 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink/70">
          {content.name}
          <input
            required
            value={formData.name}
            onChange={(event) =>
              setFormData((current) => ({ ...current, name: event.target.value }))
            }
            className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-rose"
            placeholder="Votre nom"
          />
        </label>
        <label className="text-sm font-medium text-ink/70">
          {content.phone}
          <input
            required
            value={formData.phone}
            onChange={(event) =>
              setFormData((current) => ({ ...current, phone: event.target.value }))
            }
            className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-rose"
            placeholder="07 00 00 00 00"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-ink/70">
        {content.service}
        <select
          value={formData.service}
          onChange={(event) =>
            setFormData((current) => ({ ...current, service: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-rose"
        >
          <option value="">{content.choose}</option>
          {content.services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>

      <label className="mt-4 block text-sm font-medium text-ink/70">
        {content.message}
        <textarea
          rows={5}
          value={formData.message}
          onChange={(event) =>
            setFormData((current) => ({ ...current, message: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-rose"
          placeholder={content.placeholder}
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/55">
          {content.note}
        </p>
        <button
          type="submit"
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
        >
          {content.submit}
        </button>
      </div>

      {status === "success" ? (
        <p className="mt-4 rounded-2xl bg-blush px-4 py-3 text-sm text-ink">
          {content.success}
        </p>
      ) : null}
    </form>
  );
}
