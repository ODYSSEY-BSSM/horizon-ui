import { forwardRef, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import NextLink from 'next/link';

export interface UniversalLinkProps {
  href?: string;
  children: ReactNode;
}

const UniversalLink = forwardRef(({ href, children }: UniversalLinkProps) => {
  if (
    typeof window === 'undefined' ||
    'next' in window ||
    '__NEXT_DATA__' in window
  ) {
    return <NextLink href={href || ''}>{children}</NextLink>;
  }

  if ('ReactRouter' in window) {
    return <RouterLink to={href || ''}>{children}</RouterLink>;
  }

  return <a href={href}>{children}</a>;
});

export default UniversalLink;
