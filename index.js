function time() {
    const d = new Date()
    let h = d.getUTCHours()
    let m = d.getUTCMinutes()
    let s = d.getUTCSeconds()

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("utc_time").innerHTML = `${h}:${m}:${s}`
    setTimeout(time, 1000)
}
time()

const date = new Date();
const weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = document.getElementById("utc_date").innerHTML = weekday[date.getDay()]