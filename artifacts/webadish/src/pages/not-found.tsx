import { Link } from "wouter";
import { Shield, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="pt-36 pb-24 hero-gradient min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8 border border-accent/20">
            <Shield size={16} /> Page Not Found
          </div>
          <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">This page doesn't exist</h2>
          <p className="text-muted-foreground text-lg mb-10">
            The page you're looking for may have been moved or deleted. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="accent" size="lg">
                <Home size={18} className="mr-2" /> Go to Homepage
              </Button>
            </Link>
            <Link href="/hacked-site-recovery">
              <Button variant="outline-primary" size="lg">
                Emergency Recovery <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
            {[
              { label: "Protection Plans", href: "/maintenance" },
              { label: "Security", href: "/security" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="bg-white rounded-xl p-4 border border-border/50 text-sm font-medium hover:border-accent hover:text-accent transition-all text-center block">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
