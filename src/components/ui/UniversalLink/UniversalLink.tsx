import { forwardRef, ReactNode, Ref } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import NextLink from 'next/link';

export interface UniversalLinkProps {
  href?: string;
  children: ReactNode;
}

const UniversalLink = forwardRef(
  ({ children, href }: UniversalLinkProps, ref: Ref<HTMLAnchorElement>) => {
    if (
      typeof window === 'undefined' ||
      'next' in window ||
      '__NEXT_DATA__' in window
    ) {
      return (
        <NextLink href={href || ''} ref={ref}>
          {children}
        </NextLink>
      );
    }

    if ('ReactRouter' in window) {
      return (
        <RouterLink to={href || ''} ref={ref}>
          {children}
        </RouterLink>
      );
    }

    return <a href={href} ref={ref}>{children}</a>;
  },
);

UniversalLink.displayName = 'UniversalLink';

export default UniversalLink;
