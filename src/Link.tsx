import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

type LinkProps = NextLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & {
    activeClassName?: string;
    children?: React.ReactNode;
  };

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const { href, className, activeClassName = 'font-bold', children, ...other } = props;
  const router = useRouter();
  const pathname = typeof href === 'string' ? href : (href as { pathname?: string })?.pathname ?? '/';
  const isActive = router.pathname === pathname;
  const classes = [className, isActive ? activeClassName : ''].filter(Boolean).join(' ');

  return (
    <NextLink href={href} className={classes} ref={ref} {...other}>
      {children}
    </NextLink>
  );
});

export default Link;
