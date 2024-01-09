function updateBreakingNews(text) {
    document.getElementById('breaking-news-text').innerText = text;
  }
  
  setInterval(function () {
    updateBreakingNews("#linoldruck #linocut #linoprint #linolschnitt #printmaking #linogravure #linoleumprint #art #print #printmaker #linocutprint #lino #printmakersofinstagram #reliefprint #linograbado #linoleum #handprinted #blockprint #linoprinting #imprinted #blockprinting #linocutting #get #handmade #druckgrafik #illustration #justprintmaking #handcarved #linografia #kunst");
  }, 5000);

  function changeDisplay() {
    document.getElementById("eva").style.display = "block";
}


//   function changeColor() {
//     const pathElement = document.getElementById('colorChangingPath');
//     const colors = ['#1C8A8D', '#FF0000', '#00FF00', '#0000FF', '#FF00FF'];
//     const currentColor = pathElement.style.fill || window.getComputedStyle(pathElement).fill;
//     const currentIndex = colors.indexOf(currentColor);
//     const nextIndex = (currentIndex + 1) % colors.length;
//     const newColor = colors[nextIndex];

//     pathElement.style.fill = newColor;
// }

// setInterval(changeColor, 500);