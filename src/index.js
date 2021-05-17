import React from "react";
import ReactDOM from "react-dom";

import { IntlProvider, FormattedNumber } from "react-intl";

import { addAppLocaleData } from "./localeData";
addAppLocaleData();

import App from "./App";

ReactDOM.render(
  <ul>
    {["en-US", "en-GB", "de", "fr", "es", "cs", "sk", "ja"].map(locale => (
      <IntlProvider locale={locale}>
        <li>
          <h3>
            <img
              src="blank.gif"
              class={`flag flag-${locale}`}
              alt="Czech Republic"
            />{" "}
            locale="{locale}"
          </h3>
          <span>
            <App />
          </span>
        </li>
      </IntlProvider>
    ))}
  </ul>,
  document.getElementById("root"),
);
