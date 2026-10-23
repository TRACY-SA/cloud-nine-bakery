"use client";

import { IconButton } from "@/components/ui/icon-button";
import { BakeryImage } from "@/components/ui/bakery-image";
import { categoryLabel } from "@/data/categories";
import { formatCurrency } from "@/lib/format-currency";
import { buildWhatsAppUrl, productEnquiryMessage } from "@/lib/whatsapp";
import type { Product } from "@/types";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export function ProductDetailDialog({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (product && !dialog.open) dialog.showModal();
    if (!product && dialog.open) dialog.close();
  }, [product]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onCloseRef.current();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  const enquiryUrl = product ? buildWhatsAppUrl(productEnquiryMessage(product)) : "";

  return (
    <dialog
      ref={dialogRef}
      className="product-dialog"
      aria-labelledby="product-dialog-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {product ? (
        <div className="relative max-h-[calc(100vh-1.5rem)] overflow-y-auto bg-cream">
          <div className="sticky top-0 z-10 flex justify-end bg-cream/95 px-3 py-3">
            <IconButton label="Close product details" onClick={onClose}>
              <X aria-hidden="true" size={18} />
            </IconButton>
          </div>
          <div className="grid lg:grid-cols-2">
            <BakeryImage
              src={product.image}
              alt={product.imageAlt}
              sizes="(min-width: 1024px) 28rem, 100vw"
              frameClassName="h-56 sm:h-72 lg:h-full lg:min-h-[32rem]"
              objectPosition={product.objectPosition}
            />
            <div className="px-5 py-6 sm:px-8 sm:py-8">
              <p className="eyebrow text-cocoa">{categoryLabel(product.category)}</p>
              <h2 id="product-dialog-title" className="mt-3 pr-14 font-display text-4xl text-espresso">
                {product.name}
              </h2>
              <p className="mt-4 leading-7 text-cocoa">{product.description}</p>
              <p className="mt-5 text-lg text-espresso">
                {formatCurrency(product.price)} <span className="text-sm text-muted">{product.unit}</span>
              </p>
              <p className="mt-2 text-sm text-muted">{product.portion}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center bg-espresso px-6 text-[0.78rem] font-semibold tracking-[0.14em] text-cream uppercase hover:bg-cocoa"
                >
                  Enquire on WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">
                This opens a WhatsApp chat with the product name filled in. It does not place an order.
                You still need to send the message, and the bakery will confirm availability and price.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
