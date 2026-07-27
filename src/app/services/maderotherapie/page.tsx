import { SiteLayout } from "@/components/layout";
import { Section } from "@/components/layout/Section";

export default function PlaceholderPage() {
  return (
    <SiteLayout header="opaque" footer="default">
      <Section className="py-32 min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">Services - Maderotherapie</h1>
          <p className="text-muted-foreground text-lg">Cette page est en cours de construction.</p>
        </div>
      </Section>
    </SiteLayout>
  );
}
