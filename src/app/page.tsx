"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          navItems={
            [
              { name: "Hero", id: "hero" },
              { name: "About", id: "about" },
              { name: "How to Buy", id: "how-to-buy" },
              { name: "Tokenomics", id: "tokenomics" },
              { name: "Footer", id: "footer" }
            ]
          }
          buttonText="Start Free Trial"
          onButtonClick={() => {}} 
        />
      </div>

      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to Mvpblocks"
          subtitle="Your playground for Chess in the 3D world!"
          contractAddress="0x123..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about">
        <CtaAbout
          title="About Mvpblocks"
          descriptions={[
            "We offer the most interactive platform for Chess lovers.",
            "Our platform combines playfulness with strategy.",
            "Join us today and enhance your Chess skills!"
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Our token provides utility and value to all users."
          cardItems={[
            { id: 1, title: "Supply", description: "Total supply of tokens." },
            { id: 2, title: "Liquidity", description: "Available liquidity in the market." },
            { id: 3, title: "Market Cap", description: "Market capitalization of the token." }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Mvpblocks Logo"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => {} }] },
            { items: [{ label: "Terms of Service", onClick: () => {} }] },
            { items: [{ label: "Contact Us", onClick: () => {} }] }
          ]}
          logoText="Mvpblocks"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}