import fetchJsonp from "fetch-jsonp";

const total2022Url =
  "https://wakatime.com/share/@d1211c1b-0278-49e5-8d9f-f430871ca943/a08ac7f9-615c-45b4-aa53-e2fdc9bd392e.json";

const percentageUrl =
  "https://wakatime.com/share/@d1211c1b-0278-49e5-8d9f-f430871ca943/a58ba9e3-e7b4-4c55-b99a-c61251cd980c.json";
// export function getLanguagePercentages2022(setLoading, setData){
//     setLoading(true);
//     fetchJsonp(percentageUrl)
//     .then(function(response) {
//       return response.json()
//     }).then(function(json) {
//         let data = json.data;
//       setData(data);
//       setLoading(false);
//       console.log(json.data[0]);
//     }).catch(function(ex) {
//       console.log('parsing failed', ex)
//     })
// }

export async function getWakatime() {
  //getLangPercentages
  //getYearlyTime
}

// export async function getCodeStatsPreviousYear(setLoading, setData) {
//   setLoading(true);
//   let { totalHours, dailyAverage } = await getPreviousYearStats();

//   const response = await fetchJsonp(percentageUrl);
//   const json = await response.json();
//   setData(json.data);
//   setLoading(false);
// }

async function getCodeStatsPreviousYear() {
  // setLoading(true);
  let { totalHours, dailyAverage } = await getPreviousYearStats();

  const response = await fetchJsonp(percentageUrl);
  const json = await response.json();
  return json.data;
  // setData(json.data);
  // setLoading(false);
}

export async function getPreviousYearStats() {
  const seconds2022 = await getTotalSecondsPreviousYear();

  let totalHours = convertSeconds(seconds2022);
  let dailyAverage = convertSeconds(seconds2022 / 365);
  const top10 = await getTop10Languages(seconds2022);

  return { totalHours, dailyAverage, top10 };
}

async function getTop10Languages(totalSeconds) {
  const response = await fetchJsonp(percentageUrl);
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
    return { rank: rank++, name: x.name, time: convertSeconds(x.seconds) };
  });
}

async function getTotalSecondsPreviousYear() {
  const response = await fetchJsonp(total2022Url);
  const json = await response.json();
  let totalSeconds = json.data.reduce((prev, cur) => {
    return prev + cur.grand_total.total_seconds;
  }, 0);
  const missingSeconds = 3600 * 8 * 5 * 3; //Missing due error in wakatime
  return totalSeconds + missingSeconds;
}

function convertSeconds(seconds) {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor((seconds % 3600) % 60);
  return `${h}h ${m}m ${s}s`;
}
