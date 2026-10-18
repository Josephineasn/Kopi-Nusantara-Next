import { JSX } from "react";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#fdfbf7",
        color: "#332211",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          border: "2px solid #8b5a2b",
          borderRadius: "16px",
          padding: "40px 30px",
          backgroundColor: "#ffffff",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
          maxWidth: "520px",
          width: "100%",
        }}
      >

        <h1
          style={{
            fontSize: "2rem",
            margin: "0.5rem 0",
            color: "#4a2c11",
          }}
        >
          Josephine Asnat
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#6e5034",
            margin: "0 0 1 0",
          }}
        >
          NIM: 535250072
        </p>

        <p
          style={{
            fontSize: "0.95rem",
            color: "#888888",
            margin: "0 0 1.75 0",
          }}
        >
          Front-End Programming — Pertemuan 9
        </p>

        {/* Button ke page Kopi Nusantara */}
        <Link
          href="/kopi-nusantara/index.html"
          target="_blank"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            backgroundColor: "#6f4e37",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <span> Open Website Kopi Nusantara </span>
        </Link>
      </div>
    </main>
  );
}