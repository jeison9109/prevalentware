import React from "react";
import Head from "next/head";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Gente PreValente</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <main className="w-full h-auto bg-background">{children}</main>
      </div>
    </>
  );
}
