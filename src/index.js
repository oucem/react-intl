import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IntlProvider } from "react-intl";


ReactDOM.render(
  <ul>
    {["fr"].map(locale => (
      <IntlProvider locale={locale}>
        <li>
          <h3>

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
