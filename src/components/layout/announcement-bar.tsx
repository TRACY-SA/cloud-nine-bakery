import { siteConfig } from "@/lib/site-config";

export function AnnouncementBar() {
  return (
    <div className="bg-espresso text-cream">
      <p className="px-4 py-2 text-center text-[0.72rem] tracking-[0.16em] uppercase">
        {siteConfig.announcement}
      </p>
    </div>
  );
}
