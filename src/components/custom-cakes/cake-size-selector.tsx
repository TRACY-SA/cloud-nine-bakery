"use client";

import { sizes } from "@/data/cake-options";

export function CakeSizeSelector({
  value,
  error,
  onChange,
}: {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset id="size" tabIndex={-1} className="grid gap-3">
      <legend className="text-sm font-medium text-espresso">Cake size</legend>
      <p id="size-hint" className="text-sm leading-6 text-muted">
        Serving counts are approximate. They change with the cake and how it is cut.
      </p>
      <div
        className="grid gap-2"
        role="radiogroup"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? "size-error" : "size-hint"}
      >
        {sizes.map((size) => (
          <label key={size.value} className="choice">
            <input
              type="radio"
              name="size"
              value={size.value}
              checked={value === size.value}
              onChange={() => onChange(size.value)}
            />
            <span className="flex flex-1 flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <span>{size.label}</span>
              <span className="text-sm text-muted">{size.servings}</span>
            </span>
          </label>
        ))}
      </div>
      {error ? (
        <p id="size-error" role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
