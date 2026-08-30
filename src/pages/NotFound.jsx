import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="hero-bg flex min-h-[calc(100dvh-4rem)] items-center justify-center px-5 pt-32 md:pt-36">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">This page couldn't be found</h1>
        <p className="mt-3 text-muted-foreground">
          The link may be outdated or the page has moved. Let's get you back to a smile.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <Link to="/" className="btn-primary">
            Go home
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
