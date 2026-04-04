import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-shop mx-auto px-6 py-20 text-center">
      <h1 className="text-page-title font-logo mb-6">Page Not Found</h1>
      <p className="text-sm text-muted mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/collections/all"
        className="inline-block bg-foreground text-white uppercase tracking-nav text-[11px] font-medium py-4 px-12 hover:bg-foreground/90 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
