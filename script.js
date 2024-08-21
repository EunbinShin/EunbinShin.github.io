// script.js
const apiKey = 'XyJfo%2FA0MQHOntHGIE3dxaJZyxQLx4g%2B%2FNQKLAxQ9VoRw6anY1%2BglathdfvSVSPJi8hnTKzXzSfJvlZVk6kn7g%3D%3D'; // 여기에 data.go.kr에서 발급받은 API 키를 입력하세요

async function convertToLunar() {
    const date = document.getElementById('date').value;
    if (!date) {
        alert("날짜를 선택하세요.");
        return;
    }

    try {
        const response = await fetch(
            `https://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?serviceKey=${apiKey}&solYear=${date.split('-')[0]}&solMonth=${date.split('-')[1]}&solDay=${date.split('-')[2]}`
        );
        const xml = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, "text/xml");
        
        const lunarYear = xmlDoc.getElementsByTagName("lunYear")[0].childNodes[0].nodeValue;
        const lunarMonth = xmlDoc.getElementsByTagName("lunMonth")[0].childNodes[0].nodeValue;
        const lunarDay = xmlDoc.getElementsByTagName("lunDay")[0].childNodes[0].nodeValue;

        document.getElementById('result').innerText = `음력: ${lunarYear}-${lunarMonth}-${lunarDay}`;
    } catch (error) {
        document.getElementById('result').innerText = "변환 실패!";
    }
}

async function convertToSolar() {
    const date = document.getElementById('date').value;
    if (!date) {
        alert("날짜를 선택하세요.");
        return;
    }

    try {
        const response = await fetch(
            `https://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getSolCalInfo?serviceKey=${apiKey}&lunYear=${date.split('-')[0]}&lunMonth=${date.split('-')[1]}&lunDay=${date.split('-')[2]}`
        );
        const xml = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, "text/xml");

        const solarYear = xmlDoc.getElementsByTagName("solYear")[0].childNodes[0].nodeValue;
        const solarMonth = xmlDoc.getElementsByTagName("solMonth")[0].childNodes[0].nodeValue;
        const solarDay = xmlDoc.getElementsByTagName("solDay")[0].childNodes[0].nodeValue;

        document.getElementById('result').innerText = `양력: ${solarYear}-${solarMonth}-${solarDay}`;
    } catch (error) {
        document.getElementById('result').innerText = "변환 실패!";
    }
}
