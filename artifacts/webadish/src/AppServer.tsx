import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Maintenance from "@/pages/Maintenance";
import Security from "@/pages/Security";
import HackedSiteRecovery from "@/pages/HackedSiteRecovery";
import Retainer from "@/pages/Retainer";
import Pricing from "@/pages/Pricing";
import India from "@/pages/India";
import IndiaDpdp from "@/pages/IndiaDpdp";
import IndiaCertIn from "@/pages/IndiaCertIn";
import SecurityScore from "@/pages/SecurityScore";
import AgencyPartners from "@/pages/AgencyPartners";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyVerofax from "@/pages/CaseStudyVerofax";
import CaseStudyShivamAutozone from "@/pages/CaseStudyShivamAutozone";
import CaseStudyCrystalGroup from "@/pages/CaseStudyCrystalGroup";
import Contact from "@/pages/Contact";
import WebDesign from "@/pages/WebDesign";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import RefundPolicy from "@/pages/RefundPolicy";
import NotFound from "@/pages/not-found";
import AppShell from "@/AppShell";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/maintenance" component={Maintenance} />
      <Route path="/security" component={Security} />
      <Route path="/hacked-site-recovery" component={HackedSiteRecovery} />
      <Route path="/retainer" component={Retainer} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/india" component={India} />
      <Route path="/india/dpdp-compliance-wordpress" component={IndiaDpdp} />
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
      <Route path="/contact" component={Contact} />
      <Route path="/web-design" component={WebDesign} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

type AppServerProps = {
  ssrPath?: string;
};

export default function AppServer({ ssrPath }: AppServerProps) {
  return (
    <AppShell ssrPath={ssrPath}>
      <AppRoutes />
    </AppShell>
  );
}
