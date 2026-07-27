import { Container } from "@/components/layout/Container";
import { FooterBottom } from "./FooterBottom";

/**
 * Variante minimale du footer.
 * Affiche uniquement la bande basse : copyright + liens légaux.
 * Utilisée pour les pages checkout, login, outils immersifs, etc.
 */
export function FooterMinimal() {
  return (
    <footer role="contentinfo" className="border-t border-border/40 bg-card">
      <Container>
        <FooterBottom />
      </Container>
    </footer>
  );
}
