import { parseISO, format } from "date-fns";


const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d LLLL, yyyy")}</time>;
};

export default DateFormatter;