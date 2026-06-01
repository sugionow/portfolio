"use client";

import dynamic from "next/dynamic";

const PortfolioApp = dynamic(() => import("@/sugiono-3d/PortfolioApp"), {
  ssr: false,
});

export default function PortfolioClientShell() {
  return <PortfolioApp />;
}
