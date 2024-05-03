//  Do on window load
window.onload = function() {
    updateClock();
    setInterval(updateClock, 10000);
    getNums();
    setInterval(getNums, 10000);
    getNextNums();
    setInterval(getNextNums, 10000);
}

//  Update the clock every 10 seconds
function updateClock() {
    var date = new Date();

    var hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()

    document.getElementById("clock").innerHTML = hour + ":" + minutes;
}

function getNums() {
    fetch("http://localhost:8090/signage/getNums").then(function(response) {
        return response.json();
      })
      .then(function(data) {
        fetch("http://localhost:8090/signage/nextNum").then(function(response) {
            return response.json();
          })
          .then(function(data) {
            document.getElementById("nextNumber").innerHTML = data["num"];
          })
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
        for (const key in data) {
            document.getElementById("num" + key).innerHTML = data[key][0];
            document.getElementById("kiosk" + key).innerHTML = data[key][1];
        }
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function getNextNums() {
}