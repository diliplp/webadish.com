import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Maintenance from "@/pages/Maintenance";
import Security from "@/pages/Security";
import HackedSiteRecovery from "@/pages/HackedSiteRecovery";
import Retainer from "@/pages/Retainer";
import Pricing from "@/pages/Pricing";
import India from "@/pages/India";
import SecurityScore from "@/pages/SecurityScore";
import AgencyPartners from "@/pages/AgencyPartners";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CaseStudies from "@/pages/CaseStudies";
import Contact from "@/pages/Contact";
import WebDesign from "@/pages/WebDesign";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import RefundPolicy from "@/pages/RefundPolicy";
import NotFound from "@/pages/not-found";
import SiteSeo from "@/components/SiteSeo";
import TrackingManager from "@/components/TrackingManager";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

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
      <Route path="/security-score" component={SecurityScore} />
      <Route path="/agency-partners" component={AgencyPartners} />
      <Route path="/blog" component={Blog} />
      <Route path="/10-website-hacking-methods-that-put-your-site-at-risk-in-2025" component={BlogPost} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/contact" component={Contact} />
      <Route path="/web-design" component={WebDesign} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

type AppProps = {
  ssrPath?: string;
};

function App({ ssrPath }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          base={import.meta.env.BASE_URL.replace(/\/$/, "")}
          ssrPath={ssrPath}
        >
          <SiteSeo />
          <TrackingManager />
          <AppRoutes />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
