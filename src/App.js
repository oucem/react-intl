import React from "react";
import { FormattedDate } from "react-intl";
const formatStyle = {
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric"
};

// https://github.com/yahoo/react-intl/wiki/Components#FormattedDate
export default () => <FormattedDate {...formatStyle} value={new Date()} />;
