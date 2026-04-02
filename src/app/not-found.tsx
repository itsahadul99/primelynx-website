import Link from "next/link";
import { BackgroundOrbs } from "@/components/shared";

export default function NotFound() {
  return (
    <>
      <BackgroundOrbs />
      <main className="relative min-h-screen overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background" />

        <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-24 sm:px-8">
          <div className=" w-full max-w-2xl rounded-3xl p-8 text-center sm:p-12">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Error 404
            </p>

            <h1 className="mb-5 text-5xl font-black leading-tight text-text-primary sm:text-7xl">
              Lost in
              <span className="block bg-linear-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                Cyberspace
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-base text-text-secondary sm:text-lg">
              The page you are looking for does not exist or may have moved.
              Let us route you back to somewhere useful.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="w-full rounded-2xl bg-primary px-8 py-4 text-center text-base font-extrabold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.65)] sm:w-auto"
              >
                Back to Home
              </Link>
              <Link
                href="/#contact"
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-bold text-text-primary backdrop-blur transition-all hover:border-secondary/40 hover:bg-white/10 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
