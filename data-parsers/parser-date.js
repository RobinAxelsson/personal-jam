export default function parseDateToString(date) {
  if (date === "" || date === null)
    return "ongoing";

  let year = date.split("-")[0];
  let month = date.split("-")[1];
  return month + "/" + year;
}
