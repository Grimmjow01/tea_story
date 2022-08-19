async function getTeaData() {
  const response = await fetch('/home/tea', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  const teas = await response.json();

  ymaps.ready(() => {
    const myMap = new ymaps.Map('home_map', {
      // center: [55.751574, 37.573856],
      center: [33.080569, 78.444949],
      zoom: 3.5,
      controls: ['zoomControl'],
    }, {
      searchControlProvider: 'yandex#search',
    });
    teas.forEach((tea) => {
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      );
      const geocode = ymaps.geocode(tea.location);
      geocode.then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        const coords = firstGeoObject.geometry.getCoordinates();
        const mark = new ymaps.Placemark(coords, {
          hintContent: tea.title,
        }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: tea.image_url,
          iconImageSize: [24, 24],
          iconImageOffset: [-24, -24],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout,
        });
        mark.events.add('click', () => {
          window.location.assign(`tea/${tea.id}`);
        });
        myMap.geoObjects.add(mark);
      });
    });
  });
}
getTeaData();
