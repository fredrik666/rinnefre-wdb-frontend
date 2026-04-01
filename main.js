
const apiUrl = "https://rahti-demo-git-firstproject.2.rahtiapp.fi/api/ip";

console.log("API URL:", apiUrl);

async function getIp() {
    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Getting IP...", data);
        document.getElementById("ip").textContent = data.client_ip;
    } catch (err) {
        console.error("Failed to fetch IP:", err);
        document.getElementById("ip").textContent = "Error fetching IP";
    }
}

getIp();