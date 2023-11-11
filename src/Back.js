import axios from "axios";
async function getLocInfo() {
    // return the location information
    try {
        const response = await fetch("http://ip-api.com/json");
        const data = await response.json();
        return {
            ip: data.query,
            country: data.country,
            city: data.city,
        };
    }
    catch (error) {
        console.error("Error fetching IP information:", error);
        return null;
    }
}
getLocInfo;
export async function search(keyword) {
    const ans = [];
    let stationInfo;
    let url = "https://api.waqi.info/v2/search/?token=" + token() + "&keyword=" + keyword;
    try {
        const response = await axios.get(url);
        if (response.data.status === "ok") {
            const filteredStations = response.data.data.filter((station) => {
                return upToDate(station.time.vtime);
            });
            for (const station of filteredStations) {
                stationInfo = await showStation(station.uid);
                ans.push({ station, stationInfo });
            }
        }
        else {
            console.log("An error occurred while fetching data.");
        }
    }
    catch (err) {
        console.log("An error occurred while making the request.");
    }
    return ans;
}
export async function showStation(uid) {
    let stationInfo = {
        pm25: { v: -999 },
        pm10: { v: -999 },
        o3: { v: -999 },
        no2: { v: -999 },
        so2: { v: -999 },
        co: { v: -999 },
        t: { v: -999 },
        w: { v: -999 },
        r: { v: -999 },
        h: { v: -999 },
        dew: { v: -999 },
        p: { v: -999 },
    };
    const apiUrl = `https://api.waqi.info/feed/@` + uid.toString() + `/?token=` + token();
    const doShowStation = async () => {
        try {
            const response = await axios.get(apiUrl);
            if (response.data.status === "ok") {
                const result = response.data;
                stationInfo = {
                    pm25: result.data.iaqi.pm25,
                    pm10: result.data.iaqi.pm10,
                    o3: result.data.iaqi.o3,
                    no2: result.data.iaqi.no2,
                    so2: result.data.iaqi.so2,
                    co: result.data.iaqi.co,
                    t: result.data.iaqi.t,
                    w: result.data.iaqi.w,
                    r: result.data.iaqi.r,
                    h: result.data.iaqi.h,
                    dew: result.data.iaqi.dew,
                    p: result.data.iaqi.p,
                };
            }
            else {
                console.log("An error occurred while fetching data.");
            }
        }
        catch (err) {
            console.log("An error occurred while making the request.");
        }
    };
    await doShowStation();
    // console.log(stationInfo);
    return stationInfo;
}
function token() {
    return "548fb7ea32443ec8b103ddc8f837c0c973c37bb0";
}
function upToDate(vtime) {
    //returns True it the vtime is today or yesterday
    const today = Math.floor(Date.now() / 1000);
    const oneDayInSeconds = 24 * 60 * 60;
    const startOfToday = today % oneDayInSeconds;
    const startOfYesterday = startOfToday - oneDayInSeconds;
    if (vtime >= startOfYesterday && vtime <= startOfToday) {
        return false;
    }
    else {
        return true;
    }
}
