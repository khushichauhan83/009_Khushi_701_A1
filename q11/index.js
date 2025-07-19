function isWeekend(dateStr) {
  const date = new Date(dateStr);

  if (isNaN(date)) {
    return "Invalid date format. Use YYYY-MM-DD";
  }

  const day = date.getDay(); // Sunday = 0, Saturday = 6

  return day === 0 || day === 6;
}

module.exports = {
  isWeekend
};
