"use client";

import { CursorProvider } from "@/contexts/CursorContext";
import CustomCursor from "@/components/CustomCursor";

export default function CursorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursorProvider>
      {children}
      <CustomCursor />
    </CursorProvider>
  );
}
