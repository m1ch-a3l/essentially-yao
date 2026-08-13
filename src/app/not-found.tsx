import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-950">
      <Container className="text-center">
        <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
          404
        </p>
        <h1 className="mt-5 font-display text-3xl font-medium text-off-white sm:text-4xl">
          This page could not be found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-off-white/60">
          The page you are looking for may have been moved or no longer
          exists.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Return Home
          </Button>
          <Button href="/contact" variant="outline-light">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
