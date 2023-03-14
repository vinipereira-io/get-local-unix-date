// get current DATE/TIME in local timezone
const sydney_now = new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney", timeZoneName: "short" });

// get current DATE in local timezone
const sydney_today = `${sydney_now.slice(0,9)} 00:00:00 ${sydney_now.slice(-6)}`;

// get UNIX TIMESTAMP of current DATE in local timezone
const sydney_todayUnix = Math.floor(new Date(sydney_today).getTime() / 1000);

console.log(sydney_now, sydney_today, sydney_todayUnix);