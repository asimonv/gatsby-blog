import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import styled from "styled-components";

import { ThemeContext } from "../ThemeContext";
import { vsDark, vsLight } from "../../themes/codeTheme";

const Pre = styled.pre`
  text-align: left;
  padding: 0.5em;
  overflow: scroll;
  font-size: 18px;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const StaticCodeSnippet = ({ children: code, language }) => {
  const { colorMode } = React.useContext(ThemeContext);
  return (
    <div className="flex flex-col">
      <div className="px-4 py-1 bg-gray-800 rounded-t font-mono text-sm font-semibold inline-block self-end">
        {language}
      </div>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={colorMode === "light" ? vsLight : vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={`${className} font-mono bg-gray-800 rounded rounded-tr-none`} style={{ ...style }}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </div>
  );
};

export default StaticCodeSnippet;
