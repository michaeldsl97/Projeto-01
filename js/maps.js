let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -15.795050, lng: -47.899426 },
    zoom: 16,
  });
}

initMap();