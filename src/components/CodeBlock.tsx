import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';

// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);

import React, { FC } from 'react';

interface Props {
  className?: string;
  children?: string;
}

const CodeBlock: FC<Props> = ({ className, children }: Props) => {
  const language = className == null ? 'text' : className.replace(/language-/, '');
  const hlClassName = `${className} hljs ${language}`;
  const hlResult = hljs.highlight(children ?? '', { language });

  return (
    <code
      className={hlClassName}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: hlResult.value }}
    />
  );
};

CodeBlock.defaultProps = {
  className: undefined,
  children: undefined
};

export default CodeBlock;
