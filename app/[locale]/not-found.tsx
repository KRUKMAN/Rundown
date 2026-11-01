import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-site py-24">
      <div className="border-t border-ink pt-6">
        <h1 className="display text-[clamp(44px,6vw,88px)]">Not here.</h1>
        <p className="mt-6 max-w-[520px] text-[20px]">
          This page doesn&apos;t exist. <Link className="link-quiet font-semibold" href="/">Back to the start</Link>.
        </p>
      </div>
    </main>
  );
}
