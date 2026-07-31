import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getPayloadFeaturedProducts } from "@/lib/cms";

export async function FeaturedProducts() {
  const payloadProducts = await getPayloadFeaturedProducts();

  if (payloadProducts.length === 0) {
    return null;
  }

  const products = payloadProducts;

  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <span className="mb-4 inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
              Products
            </span>
            <h2 className="max-w-xl text-display-lg font-display font-medium">
              Premium solar equipment <span className="text-ink-muted">for every need</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="hidden sm:block">
            <Button variant="secondary" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </FadeIn>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <StaggerItem key={product.href}>
              <Link href={product.href} className="group relative block h-full">
                <div
                  className={cn(
                    "h-full rounded-2xl bg-background p-1.5 ring-1 ring-border/60",
                    "transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    "hover:-translate-y-1 hover:ring-primary/20 hover:shadow-lg",
                  )}
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-[calc(1rem-2px)] bg-card">
                    <div className="relative aspect-4/3 overflow-hidden bg-background">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {product.badge ? (
                        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground">
                          {product.badge}
                        </span>
                      ) : null}

                      <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-card/90 opacity-0 shadow-sm transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <p className="text-[11px] font-medium uppercase tracking-widest text-ink-muted">
                        {product.category}
                      </p>
                      <h3 className="mt-2 text-base font-semibold font-body leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.1} className="mt-10 flex justify-start md:mt-12 sm:hidden">
          <Button variant="secondary" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
