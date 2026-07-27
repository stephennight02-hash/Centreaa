import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permet le rechargement à chaud (HMR) lors de l'accès depuis un mobile ou un autre PC sur le réseau local
  allowedDevOrigins: ["192.168.0.247"],
};

export default nextConfig;
