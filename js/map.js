/* Documentatie op https://leafletjs.com/ */

/*map*/
let map = L.map('map').setView([51.22079, 4.29637], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*pinnetje*/
var marker = L.marker([51.22078, 4.29637]).addTo(map);

/*Pop-up*/
marker.bindPopup("<b>Grote Baan 192, 9120 Melsele.").openPopup();
