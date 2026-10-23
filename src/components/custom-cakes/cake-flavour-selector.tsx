"use client";

import { flavours } from "@/data/cake-options";

export function CakeFlavourSelector({
  value,
  error,
  onChange,
}: {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset id="flavour" tabIndex={-1} className="grid gap-3">
      <legend className="text-sm font-medium text-espresso">Cake flavour</legend>
      <p id="flavour-hint" className="text-sm leading-6 text-muted">
        A preference to start from. The bakery will confirm what is available.
      </p>
      <div
        className="grid gap-2 sm:grid-cols-2"
        role="radiogroup"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? "flavour-error" : "flavour-hint"}
      >
        {flavours.map((flavour) => (
          <label key={flavour.value} className="choice">
            <input
              type="radio"
              name="flavour"
              value={flavour.value}
              checked={value === flavour.value}
              onChange={() => onChange(flavour.value)}
            />
            <span>{flavour.label}</span>
          </label>
        ))}
      </div>
      {error ? (
        <p id="flavour-error" role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
