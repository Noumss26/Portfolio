"use client";
import React, { useEffect, useCallback } from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

/**
 * Toast notification component that auto-dismisses.
 * Replaces the previous direct DOM manipulation approach.
 */
export default function Toast({
  message,
  isVisible,
  onClose,
  duration = 2500,
}: ToastProps) {
  const stableOnClose = useCallback(onClose, [onClose]);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(stableOnClose, duration);
    return () => clearTimeout(timer);
  }, [isVisible, stableOnClose, duration]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-20 right-5 z-[9999] rounded-lg bg-[#e3c177]/90 px-6 py-3 font-medium text-white shadow-lg toast-slide-in"
    >
      {message}
    </div>
  );
}
