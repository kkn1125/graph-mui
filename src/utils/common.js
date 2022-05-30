const format = (date, format, isPad) => {
  return format.replace(/yyyy|MM|dd|HH|mm|ss|SSS|AP/g, ($1) => {
    const hour = date.getHours();
    const isOver = hour > 12;
    switch ($1) {
      case "yyyy":
        return date.getFullYear().toString();
      case "MM":
        return (date.getMonth() + 1).toString().padStart(isPad ? 2 : 0, 0);
      case "dd":
        return date
          .getDate()
          .toString()
          .padStart(isPad ? 2 : 0, 0);
      case "HH":
        return (isOver ? hour - 12 : hour)
          .toString()
          .padStart(isPad ? 2 : 0, 0);
      case "mm":
        return date
          .getMinutes()
          .toString()
          .padStart(isPad ? 2 : 0, 0);
      case "ss":
        return date
          .getSeconds()
          .toString()
          .padStart(isPad ? 2 : 0, 0);
      case "SSS":
        date
          .getMilliSeconds()
          .toString()
          .padStart(isPad ? 3 : 0, 0);
      case "AP":
        return isOver ? "PM" : "AM";
      default:
        return $1;
    }
  });
};

export {format};