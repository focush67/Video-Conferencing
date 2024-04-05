import { LayoutProps } from "@/types/globals";
import React from "react";

const RootLayout = ({ children }: LayoutProps) => {
  return <main>{children}</main>;
};

export default RootLayout;
