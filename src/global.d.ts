import * as React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': any;
      'dotlottie-player': any;
    }
  }
}
