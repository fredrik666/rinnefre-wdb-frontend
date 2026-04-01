
const apiUrl = "https://rahti-demo-git-firstproject.2.rahtiapp.fi/api/ip";

async function getIp() {
    const res = await fetch(apiUrl);
    const data = await res.json();


    console.log("Getting IP...");
    document.getElementById("ip").textContent = data.client_ip;
}

getIp();