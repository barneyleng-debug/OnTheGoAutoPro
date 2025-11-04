// Simplified booking form for Getform submission
function callNow(){ window.location.href = 'tel:+16414207755'; }
function showMessage(msg, isError){
  const el = document.getElementById('form-message');
  el.textContent = msg;
  el.style.color = isError ? 'crimson' : 'inherit';
}
function initMap(){
  if(typeof L === 'undefined') return;
  const centers = window.__OGAP_CONFIG.serviceCenters || [];
  const map = L.map('map', {scrollWheelZoom:false}).setView([43.7, -93.3], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data © OpenStreetMap contributors'
  }).addTo(map);
  const group = L.featureGroup();
  centers.forEach(c=>{
    const marker = L.marker([c.lat, c.lng]).addTo(map).bindPopup(c.name);
    group.addLayer(marker);
    L.circle([c.lat,c.lng], {radius: 72000, color:'#c62828', fill:false}).addTo(map);
  });
  if(group.getLayers().length) map.fitBounds(group.getBounds().pad(0.6));
}
document.addEventListener('DOMContentLoaded', initMap);
