"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e16f7ad2-4eac-4502-a226-c9c2aaac8d09");
  }, []);

  return null;
};
