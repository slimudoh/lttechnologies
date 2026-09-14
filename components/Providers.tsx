"use client";

import { useState, useEffect } from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div>
          {children}
          <Toaster
            richColors
            toastOptions={{ duration: 10000 }}
            closeButton={true}
            position="top-right"
          />
        </div>
      )}
    </>
  );
}
