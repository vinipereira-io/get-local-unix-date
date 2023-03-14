// get current DATE/TIME in local timezone
const sydney_now = new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney", timeZoneName: "short" });

// get current DATE in local timezone
const sydney_today = `${sydney_now.slice(0,9)} 00:00:00 ${sydney_now.slice(-6)}`;

// get UNIX TIMESTAMP (seconds) of current DATE in local timezone
const sydney_todayUnix_s = Math.floor(new Date(sydney_today).getTime() / 1000);

// get UNIX TIMESTAMP (seconds) of NOW in user's timezone
const nowUnix_s = Math.floor(new Date().getTime() / 1000);

// get UNIX TIMESTAMP (ms) of current DATE in local timezone
const sydney_todayUnix_ms = new Date(sydney_today).getTime();

// get UNIX TIMESTAMP (ms) of NOW in user's timezone
const nowUnix_ms = new Date().getTime();

console.log(nowUnix_ms, sydney_todayUnix_ms);