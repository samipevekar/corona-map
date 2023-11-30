function updateMap()
{
    fetch("covid.json")
    .then(response =>{
        return response.json()
    }).then(rsp =>{
        console.log(rsp.data)
        rsp.data.forEach(element =>{
            latitude=element.latitude
            longitude=element.longitude
            cases=element.infected;
            recovered=element.recovered
            
            var markerColorClass = cases > 250 ? 'dark-red-marker-icon' : 'light-red-marker-icon'; //condtion to change the colour of marker

            
            
            // marker on the map
            marker=L.marker([latitude, longitude],{
                icon: L.icon({
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    className: markerColorClass // Apply the custom CSS class for red color
                })
            }).addTo(map);
            marker.bindTooltip("Cases: " + cases + "<br>Recovered: " + recovered).openTooltip();
        })
    })
}


updateMap()