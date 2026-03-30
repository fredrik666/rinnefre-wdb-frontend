const apiUrl = "https://api.ipify.org?format=json";

async function getIp() {
    const res = await fetch("apiUrl");
    console.log("Getting IP...");
}

getIp();