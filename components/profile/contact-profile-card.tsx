"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Link from "next/link";

import { cn } from "@/lib/cn";

type ContactField = Readonly<{
  label: string;
  value: string;
  href?: string;
}>;

export type ContactProfileCardProps = Readonly<
  {
    name?: string;
    title?: string;
    email?: string;
    phone?: string;
    location?: string;
    website?: string;
    websiteHref?: string;
    catalogRef?: string;
  } & ComponentPropsWithoutRef<"article">
>;

function ContactFieldRow({ label, value, href }: ContactField) {
  const valueClassName =
    "min-w-0 break-words text-right text-sm text-foreground transition-colors";

  return (
    <div className="group grid grid-cols-[4rem_minmax(0,1fr)] items-baseline gap-3 py-1.5">
      <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </span>
      {href && href !== "#" ? (
        <Link href={href} className={cn(valueClassName, "hover:underline")}>
          {value}
        </Link>
      ) : (
        <span className={valueClassName}>{value}</span>
      )}
    </div>
  );
}

// Contact profile — museum placard directory entry, typography only.
export const ContactProfileCard = forwardRef<
  HTMLElement,
  ContactProfileCardProps
>(
  (
    {
      className,
      name = "Alex Morgan",
      title = "Product engineer",
      email = "alex.morgan@example.com",
      phone = "+91 98765 43210",
      location = "Kolkata, India",
      website = "motion-ui.dev",
      websiteHref = "https://motion-ui.dev",
      catalogRef = "DIR · CONTACT",
      ...props
    },
    ref,
  ) => (
    <article
      ref={ref}
      data-slot="contact-profile-card"
      className={cn(
        "w-full max-w-80 rounded-sm border border-border bg-card px-5 py-4 font-sans shadow-sm",
        className,
      )}
      {...props}
    >
      <p className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground uppercase">
        {catalogRef}
      </p>

      <h3 className="mt-3 font-serif text-xl leading-snug text-foreground">
        {name}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">{title}</p>

      <div className="mt-4 space-y-0.5 border-t border-border pt-3">
        <ContactFieldRow label="Email" value={email} href={`mailto:${email}`} />
        <ContactFieldRow
          label="Phone"
          value={phone}
          href={`tel:${phone.replace(/\s/g, "")}`}
        />
        <ContactFieldRow label="Location" value={location} />
        <ContactFieldRow label="Web" value={website} href={websiteHref} />
      </div>
    </article>
  ),
);

ContactProfileCard.displayName = "ContactProfileCard";
