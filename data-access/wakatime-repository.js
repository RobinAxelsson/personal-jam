import fetchJsonp from "fetch-jsonp";

const url =
    "https://wakatime.com/share/@d1211c1b-0278-49e5-8d9f-f430871ca943/a58ba9e3-e7b4-4c55-b99a-c61251cd980c.json";
export function getLanguagePercentages2022(setLoading, setData){
    setLoading(true);
    fetchJsonp(url)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      setData(json);
      setLoading(false);
      console.log(json.data[0]);
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
}