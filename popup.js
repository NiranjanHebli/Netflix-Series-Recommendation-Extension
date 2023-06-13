document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("selectSeries")
    .addEventListener("click", function () {
      selectRandomSeries();
    });

  document
    .getElementById("selectAnimeSeries")
    .addEventListener("click", function () {
      selectRandomAnimeSeries();
    });
});

function selectRandomSeries() {
  const series = [
    { title: "Stranger Things", netflixId: "80077368" },
    { title: "Queens Gambit", netflixId: "80243261" },
    { title: "Squid Games", netflixId: "81262746" },
  ];

  const randomIndex = Math.floor(Math.random() * series.length);
  const randomSeries = series[randomIndex];

  const netflixUrl = `https://www.netflix.com/watch/${randomSeries.netflixId}`;
  chrome.tabs.create({ url: netflixUrl });
}

function selectRandomAnimeSeries() {
  const series = [
    { title: "Death Note", netflixId: "70171896" },
    { title: "Demon Slayer", netflixId: "81091395" },
    { title: "Oshi no ko ", netflixId: "81684735" },
    {title:"Spy x Family", netflixId:"81511413"},
    {title:"Black Clover ",netflixId:"80238226"},

  ];

  const randomIndex = Math.floor(Math.random() * series.length);
  const randomSeries = series[randomIndex];

  const netflixUrl = `https://www.netflix.com/watch/${randomSeries.netflixId}`;
  chrome.tabs.create({ url: netflixUrl });
}
