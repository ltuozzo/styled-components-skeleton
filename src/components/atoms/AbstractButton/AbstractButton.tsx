import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

export type AbstractButtonProps = { sameTab?: boolean } & React.ComponentProps<'a'> &
  React.ComponentProps<'button'>;

export const AbstractButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AbstractButtonProps
>(({ children, sameTab, ...props }, ref) => {
  let Component: 'a' | 'button' | typeof NavLink = 'button';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentProps = { ...props } as any;

  if (props.href && !props.href.startsWith('/')) {
    Component = 'a';

    delete componentProps.to;
    if (!sameTab) {
      componentProps.target = '_blank';
      componentProps.rel = 'noopener noreferrer';
    }
  } else if (props.href) {
    Component = NavLink;
    delete componentProps.href;
    componentProps.to = props.href;
  } else if (props.type == null) {
    componentProps.type = 'button';
  }

  return (
    <Component ref={ref} {...componentProps}>
      {children}
    </Component>
  );
});
