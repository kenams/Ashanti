"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  phone: "",
  service: "",
  message: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    setFormData(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="glass-panel p-7 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink/70">
          Nom
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
          Téléphone
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
        Prestation souhaitée
        <select
          value={formData.service}
          onChange={(event) =>
            setFormData((current) => ({ ...current, service: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-rose"
        >
          <option value="">Choisir une prestation</option>
          <option>Onglerie</option>
          <option>Soin visage</option>
          <option>Massage & bien-être</option>
          <option>Beauté du regard</option>
          <option>Épilation</option>
        </select>
      </label>

      <label className="mt-4 block text-sm font-medium text-ink/70">
        Message
        <textarea
          rows={5}
          value={formData.message}
          onChange={(event) =>
            setFormData((current) => ({ ...current, message: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-rose"
          placeholder="Précisez votre disponibilité ou votre besoin."
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/55">
          Ce formulaire front est prêt pour un futur branchement vers un CRM ou un système de réservation.
        </p>
        <button
          type="submit"
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
        >
          Envoyer la demande
        </button>
      </div>

      {status === "success" ? (
        <p className="mt-4 rounded-2xl bg-blush px-4 py-3 text-sm text-ink">
          Merci, votre demande a bien été préparée. Il reste à brancher ce formulaire à votre outil de réception.
        </p>
      ) : null}
    </form>
  );
}
