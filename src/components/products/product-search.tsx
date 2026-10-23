"use client";

export function ProductSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor="product-search" className="text-sm font-medium text-espresso">
        Search treats
      </label>
      <input
        id="product-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Try cake, croissant, or chocolate"
        className="field"
      />
    </div>
  );
}
