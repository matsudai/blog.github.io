import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';

// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);

import React from 'react';

interface Props {
  className?: string;
  children?: string;
}

const CodeBlock = ({ className, children }) => {
  const language = className == null ? 'text' : className.replace(/language-/, '');
  const hlClassName = `${className} hljs ${language}`;
  const hlResult =  hljs.highlight(children ?? '', { language });

  return (
    <code className={hlClassName} dangerouslySetInnerHTML={{ __html: hlResult.value }}></code>
  )
};

export default CodeBlock;
