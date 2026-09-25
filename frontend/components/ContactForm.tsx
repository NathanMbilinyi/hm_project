"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactMessage } from "@/lib/api";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = new FormData(e.currentTarget);
    const result = await sendContactMessage({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    });

    if (result.ok) {
      setStatus("success");
      e.currentTarget.reset();
    } else {
      setStatus("error");
      setError(result.error ?? "Hitilafu imetokea.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl2 bg-navy-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <h3 className="mt-4 font-display text-lg font-semibold text-navy-800">
          Ujumbe Umetumwa!
        </h3>
        <p className="mt-1.5 max-w-sm text-[14px] text-navy-500">
          Asante kwa kuwasiliana nasi. Tutakujibu haraka iwezekanavyo.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-[14px] font-semibold text-brand-red"
        >
          Tuma ujumbe mwingine
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Jina Lako" name="name" required />
        <Field label="Barua Pepe" name="email" type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Simu (si lazima)" name="phone" />
        <Field label="Kichwa cha Ujumbe" name="subject" required />
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-navy-700">
          Ujumbe
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-navy-100 bg-white px-4 py-3 text-[14px] text-navy-800 outline-none transition-colors focus:border-brand-red"
          placeholder="Andika ujumbe wako hapa..."
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-[13px] font-medium text-brand-red">
          <AlertCircle className="h-4 w-4" /> {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 sm:w-fit"
      >
        <Send className="h-4 w-4" />
        {status === "loading" ? "Inatuma..." : "Tuma Ujumbe"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-medium text-navy-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-navy-100 bg-white px-4 py-3 text-[14px] text-navy-800 outline-none transition-colors focus:border-brand-red"
      />
    </div>
  );
}
