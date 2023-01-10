import fetchJsonp from "fetch-jsonp";

const totalYearUrl =
  "https://wakatime.com/share/@d1211c1b-0278-49e5-8d9f-f430871ca943/a08ac7f9-615c-45b4-aa53-e2fdc9bd392e.json";

const languagePercentageUrl =
  "https://wakatime.com/share/@d1211c1b-0278-49e5-8d9f-f430871ca943/a58ba9e3-e7b4-4c55-b99a-c61251cd980c.json";

let _totalYearResponse = null;

async function getTotalYearResponse() {
  if(_totalYearResponse === null){
    const response = await fetchJsonp(totalYearUrl);
    const json = await response.json();
    _totalYearResponse = json.data;
  }
  return _totalYearResponse;
}

export async function getWakatimeStats() {
  const secondsYear = await getCodingSecondsYear();
  const secondsWeek = await getCodingSecondsWeek();
  const {start, end } = await getStartDateAndEndDate();
  const totalTime = convertToTime(secondsYear);
  const totalTimeWeek = convertToTime(secondsWeek);
  const dailyAverage = convertToTime(secondsYear / 365);
  const top10 = await getTop10Languages(secondsYear);

  return { start, end, totalTime, dailyAverage, top10, totalTimeWeek };
}

async function getTop10Languages(totalSeconds) {
  const response = await fetchJsonp(languagePercentageUrl);
  const json = await response.json();
  let languages = json.data.slice(0, 11);
  languages = languages.filter((x) => x.name != "Other");
  const correct = (name) => (name === "Python" ? 30 * 3600 : 0);

  let orderedLangs = languages
    .map((x) => {
      return {
        name: x.name,
        seconds: (totalSeconds + correct(x.name)) * x.percent * 0.01,
      };
    })
    .sort((x) => x.seconds);

    let rank = 1;
  return orderedLangs.map((x) => {
    return { rank: rank++, name: x.name, time: convertToTime(x.seconds) };
  });
}

async function getStartDateAndEndDate(){
  let data = await getTotalYearResponse();
  let start = data[0].range.date;
  let end = data[data.length - 1].range.date;
  return { start, end };
}

async function getCodingSecondsYear() {
  let data = await getTotalYearResponse();
  let totalSeconds = data.reduce((prev, cur) => {
    return prev + cur.grand_total.total_seconds;
  }, 0);

  const missingSeconds = 3600 * 8 * 5 * 3; //Missing due error in wakatime
  return totalSeconds + missingSeconds;
}

async function getCodingSecondsWeek() {
  let data = await getTotalYearResponse();
  let totalSeconds = data.slice(1, 8).reduce((prev, cur) => {
    return prev + cur.grand_total.total_seconds;
  }, 0);

  return totalSeconds;
}

function convertToTime(seconds){
  if(Number.isNaN(seconds)){
    throw new Error("expected number, got: " + seconds)
  }
  return {
      hours: Math.floor(seconds / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: Math.floor((seconds % 3600) % 60),
  }
}
