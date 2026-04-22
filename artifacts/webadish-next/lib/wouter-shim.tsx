'use client';

import NextLink from 'next/link';
import { useParams as useNextParams, usePathname, useRouter } from 'next/navigation';
import type { ComponentProps, ReactNode } from 'react';

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  href: string;
  children: ReactNode;
};

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}

export function useLocation(): [string, (to: string) => void] {
  const pathname = usePathname();
  const router = useRouter();

  return [pathname, (to: string) => router.push(to)];
}

export function useParams<T extends Record<string, string | string[] | undefined> = Record<string, string | string[] | undefined>>() {
  return useNextParams<T>();
}
