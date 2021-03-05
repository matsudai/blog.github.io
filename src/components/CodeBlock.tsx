import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-ruby");


// https://mdxjs.com/guides/syntax-highlighting#syntax-highlighting

import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export default ({ className, children }) => {
  const language = className == null ? 'text' : className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
