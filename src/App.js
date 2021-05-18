import React from "react";
import { FormattedDate } from "react-intl";

const formatStyle = {
  dateStyle: 'full',
  timeStyle: 'short',

};

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric' ,
  hour: "numeric",
  minute: "numeric",
  timeZone: 'utc'
};

// https://github.com/yahoo/react-intl/wiki/Components#FormattedDate
export default () => {
  return(<>
    <p>
      <FormattedDate {...formatStyle} value={new Date()}/>;
    </p>
    <FormattedDate {...options} value={new Date()}/>;
    </>);
};
