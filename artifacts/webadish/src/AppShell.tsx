import { ReactNode } from "react";
import { Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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

type AppShellProps = {
  children: ReactNode;
  ssrPath?: string;
};

export default function AppShell({ children, ssrPath }: AppShellProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          base={import.meta.env.BASE_URL.replace(/\/$/, "")}
          ssrPath={ssrPath}
        >
          <SiteSeo />
          <TrackingManager />
          {children}
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
