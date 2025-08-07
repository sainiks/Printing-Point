"use client";

import { cn } from "@/lib/utils";
import React from "react";

type StaticTitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export default function StaticTitle({ children, className, as: Tag = 'h1' }: StaticTitleProps) {
  return (
    <Tag className={cn(className)}>
      {children}
    </Tag>
  );
}
