"use client";

import { useState } from "react";
import Image from "next/image";

export function BakeryImage({
  src,
  alt,
  sizes,
  priority = false,
  frameClassName = "",
  className = "",
  objectPosition,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  frameClassName?: string;
  className?: string;
  objectPosition?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-ivory ${frameClassName}`}>
      {failed ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(160deg,#f7efe4,#ebc8c5)]"
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
          aria-hidden={alt ? undefined : true}
        >
          <span className="px-4 text-center font-display text-3xl text-espresso/70">Cloud Nine</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${className}`}
          style={objectPosition ? { objectPosition } : undefined}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
