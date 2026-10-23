import { Button } from "@/components/ui/button";

export function EmptyState({
  title,
  children,
  action,
}: {
  title: string;
  children: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <div className="border border-line bg-ivory px-6 py-14 text-center">
      <h2 className="font-display text-3xl text-espresso">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-cocoa">{children}</p>
      {action ? (
        <div className="mt-6">
          <Button type="button" variant="secondary" onClick={action.onClick}>
            {action.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
