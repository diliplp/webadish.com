import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import AppShell from "@/AppShell";

const Maintenance = lazy(() => import("@/pages/Maintenance"));
const Security = lazy(() => import("@/pages/Security"));
const HackedSiteRecovery = lazy(() => import("@/pages/HackedSiteRecovery"));
const Retainer = lazy(() => import("@/pages/Retainer"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const India = lazy(() => import("@/pages/India"));
const IndiaDpdp = lazy(() => import("@/pages/IndiaDpdp"));
const IndiaDpdpLp = lazy(() => import("@/pages/IndiaDpdpLp"));
const IndiaCertIn = lazy(() => import("@/pages/IndiaCertIn"));
const SecurityScore = lazy(() => import("@/pages/SecurityScore"));
const AgencyPartners = lazy(() => import("@/pages/AgencyPartners"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const CaseStudyVerofax = lazy(() => import("@/pages/CaseStudyVerofax"));
const CaseStudyShivamAutozone = lazy(() => import("@/pages/CaseStudyShivamAutozone"));
const CaseStudyCrystalGroup = lazy(() => import("@/pages/CaseStudyCrystalGroup"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const WebDesign = lazy(() => import("@/pages/WebDesign"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const Terms = lazy(() => import("@/pages/Terms"));
const RefundPolicy = lazy(() => import("@/pages/RefundPolicy"));

function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/maintenance" component={Maintenance} />
        <Route path="/security" component={Security} />
        <Route path="/hacked-site-recovery" component={HackedSiteRecovery} />
        <Route path="/retainer" component={Retainer} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/india" component={India} />
        <Route path="/india/dpdp-compliance-wordpress" component={IndiaDpdp} />
        <Route path="/india/dpdp-lp" component={IndiaDpdpLp} />
        <Route path="/india/cert-in-incident-readiness" component={IndiaCertIn} />
        <Route path="/security-score" component={SecurityScore} />
        <Route path="/agency-partners" component={AgencyPartners} />
        <Route path="/blog" component={Blog} />
        <Route path="/10-website-hacking-methods-that-put-your-site-at-risk-in-2025" component={BlogPost} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/verofax" component={CaseStudyVerofax} />
        <Route path="/case-studies/shivamautozone" component={CaseStudyShivamAutozone} />
        <Route path="/case-studies/crystalgroup" component={CaseStudyCrystalGroup} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/web-design" component={WebDesign} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/refund-policy" component={RefundPolicy} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

type AppProps = {
  ssrPath?: string;
};

function App({ ssrPath }: AppProps) {
  return (
    <AppShell ssrPath={ssrPath}>
      <AppRoutes />
    </AppShell>
  );
}

export default App;
