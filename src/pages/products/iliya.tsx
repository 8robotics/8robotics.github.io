import React from "react";
import Layout from "@/Layout";

const fontStyle = {
  fontFamily:
    'InterVariable, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
};

export default function Iliya() {
  return (
    <Layout>
      <div className="bg-white text-black" style={fontStyle}>
        <div className="max-w-5xl mx-auto py-24">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Iliya
          </h1>
          <p className="mt-6 text-lg text-black/70 font-light leading-relaxed">
            This page is coming soon. You said you’ll add Iliya later — we’ll plug the content and media in when ready.
          </p>
        </div>
      </div>
    </Layout>
  );
}
