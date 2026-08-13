"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import { clsx } from "clsx";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { AREAS_OF_INTEREST } from "@/lib/constants";

const initialState: EnquiryState = { status: "idle" };

function fieldClass(hasError?: boolean) {
  return clsx(
    "w-full rounded-md border bg-paper px-4 py-3 text-sm text-navy-900 shadow-sm shadow-navy-950/[0.02] transition-all duration-200 placeholder:text-charcoal-300 focus:shadow-md focus:shadow-navy-950/[0.06] focus:outline-none",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-charcoal-900/15 focus:border-gold-500"
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold-400 px-8 py-4 text-sm font-medium tracking-wide text-navy-950 uppercase shadow-sm shadow-navy-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-lg hover:shadow-navy-950/15 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending && <Loader2 className="size-4 animate-spin" strokeWidth={2} />}
      {pending ? "Submitting" : "Submit Enquiry"}
    </button>
  );
}

export default function ContactForm({
  defaultAreaOfInterest,
  defaultMessage,
}: {
  defaultAreaOfInterest?: string;
  defaultMessage?: string;
}) {
  const [state, formAction] = useActionState(submitEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border border-gold-500/30 bg-paper p-10 shadow-md shadow-navy-950/[0.05]">
        <CheckCircle2 className="size-8 text-gold-600" strokeWidth={1.5} />
        <h3 className="font-display text-xl font-medium text-navy-950">
          Enquiry received
        </h3>
        <p className="text-sm leading-relaxed text-charcoal-500">
          {state.message}
        </p>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-xs font-medium tracking-wide text-charcoal-700 uppercase">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            className={clsx("mt-2", fieldClass(!!errors.fullName))}
          />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-600">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="company" className="text-xs font-medium tracking-wide text-charcoal-700 uppercase">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={clsx("mt-2", fieldClass())}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-xs font-medium tracking-wide text-charcoal-700 uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={clsx("mt-2", fieldClass(!!errors.email))}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-xs font-medium tracking-wide text-charcoal-700 uppercase">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={clsx("mt-2", fieldClass())}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className="text-xs font-medium tracking-wide text-charcoal-700 uppercase">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            className={clsx("mt-2", fieldClass(!!errors.country))}
          />
          {errors.country && <p className="mt-1.5 text-xs text-red-600">{errors.country}</p>}
        </div>
        <div>
          <label htmlFor="areaOfInterest" className="text-xs font-medium tracking-wide text-charcoal-700 uppercase">
            Area of Interest
          </label>
          <select
            id="areaOfInterest"
            name="areaOfInterest"
            defaultValue={defaultAreaOfInterest ?? ""}
            className={clsx("mt-2", fieldClass(!!errors.areaOfInterest))}
          >
            <option value="" disabled>
              Select an option
            </option>
            {AREAS_OF_INTEREST.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {errors.areaOfInterest && (
            <p className="mt-1.5 text-xs text-red-600">{errors.areaOfInterest}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium tracking-wide text-charcoal-700 uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={defaultMessage}
          className={clsx("mt-2 resize-none", fieldClass(!!errors.message))}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {state.status === "error" && state.message && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}
