import { type MouseEvent, type PropsWithChildren } from 'react';

type LinkProps = PropsWithChildren<{
  to: string;
  className?: string;
}>;

export function Link({ to, className, children }: LinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    if (window.location.pathname === to) return; 
    window.history.pushState(null, '', to); 
    // 커스텀 이벤트 쏘기.
    window.dispatchEvent(new Event('app:pushstate')); 
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
