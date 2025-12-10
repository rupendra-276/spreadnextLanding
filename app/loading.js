"use client";
import { LoaderTextLogo } from "./components/Loader";

export default function Loading() {
  // This file automatically runs when any route in app/ is loading (Next.js feature)
  return <LoaderTextLogo text="Loading page..." />;
}