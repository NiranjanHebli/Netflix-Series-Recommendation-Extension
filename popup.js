document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('selectSeries').addEventListener('click', function() {
      selectRandomSeries();
    });
  });
  
  function selectRandomSeries() {
    const series = [
      { title: "Stranger Things", netflixId: "80077368" },
      {title:"Queens Gambit",netflixId:"80243261"},
      {title:"Squid Games",netflixId:"81262746"},
      


    ];
  
    const randomIndex = Math.floor(Math.random() * series.length);
    const randomSeries = series[randomIndex];

    const netflixUrl = `https://www.netflix.com/watch/${randomSeries.netflixId}`;
    chrome.tabs.create({ url: netflixUrl });
  }