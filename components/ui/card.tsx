import React from "react";
import { cn } from "@/lib/utils/cn"; // optional: utility to combine classes

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-xl border bg-white shadow-sm", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return (
    <div className={cn("p-4", className)} {...props} />
  );
}