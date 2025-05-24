"use client";

import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>電子公告 | 株式会社Aspira</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{ fontFamily: "sans-serif", margin: 0, padding: 0, backgroundColor: "#f9f9f9", color: "#333" }}>
        <header style={{ backgroundColor: "#003366", color: "white", padding: "1em", textAlign: "center" }}>
          <h1>株式会社Aspira 電子公告</h1>
        </header>
        <main style={{
          padding: "2em",
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}>
          <p>当社の法定公告はこのページに掲載いたします。</p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li style={{ marginBottom: "1em" }}>
              <strong>2024年度 決算公告：</strong>
              <a
                href="/documents/2024_kessan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007acc", textDecoration: "none" }}
              >
                PDFを表示
              </a>
            </li>
          </ul>
        </main>
        <footer style={{ textAlign: "center", padding: "1em", fontSize: "0.8em", color: "#777" }}>
          &copy; 2025 Aspira Inc. All rights reserved.
        </footer>
      </div>
    </>
  );
}
