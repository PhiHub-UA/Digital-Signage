//  Do on window load
window.onload = function() {
  updateClock();
  setInterval(updateClock, 10000);
  getNums();
  setInterval(getNums, 10000);
}

//  Update the clock every 10 seconds
function updateClock() {
  let date = new Date();

  let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
  let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()

  document.getElementById("clock").innerHTML = hour + ":" + minutes;
}

function getNums() {
      fetch("http://localhost:8080/signage").then(function(response) {
        return response.json();
        })
        .then(function(data) {
          console.log(data);

          for (const key in data) {
            console.log("setting for key " + key + " and data " + data[key])
            if(key == "nextnum") {
              document.getElementById("nextNumber").innerHTML = data[key];
            }
            else {
              document.getElementById("num" + key).innerHTML = data[key][0];
              document.getElementById("kiosk" + key).innerHTML = data[key][1];
            }
          }
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
}