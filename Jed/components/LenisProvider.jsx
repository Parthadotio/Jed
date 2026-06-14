'use client';

import { useLenis } from "../hooks/useLenis.js"

export default function LenisProvider({ children }) {
  useLenis();
  return <>{children}</>;
}
