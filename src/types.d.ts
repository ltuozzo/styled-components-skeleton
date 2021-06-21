declare module '*.svg' {
  import React = require('react');

  // eslint-disable-next-line @typescript-eslint/naming-convention
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
