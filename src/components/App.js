import React from "react";

import { ThemeProvider } from "./ThemeContext";
import GlobalStyles from "./GlobalStyles";
import PageLayout from "./PageLayout";

function App({ children }) {
  return (
    <ThemeProvider>
      <PageLayout>
        <GlobalStyles />
        {children}
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
