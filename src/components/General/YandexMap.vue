<template>
  <div class="my-2">
    <div class="mb-4 text-xs">
      <p class="font-normal text-[#6E6B7B] mb-1 dark:text-darkText">
        Адрес доставки
      </p>
      <div class="relative">
        <div class="flex">
          <input
              v-model="searchQuery"
              class="py-2 px-4 border rounded-md w-full bg-white dark:bg-darkBg"
              placeholder="Введите адрес"
              type="text"
              @input="updateSuggestions"
          />
        </div>
        <ul v-if="showSuggestions" class="suggestions bg-white shadow-md">
          <li
              v-for="(suggestion, index) in suggestions"
              :key="index"
              class="px-4 py-1 hover:bg-gray-100 transition-all cursor-pointer"
              @click="selectSuggestion(suggestion)"
          >
            {{ suggestion.displayName }}
          </li>
        </ul>
      </div>
    </div>
    <div id="map" class="mb-3"></div>
  </div>
</template>

<script>
let ymaps;
export default {
  name: "YandexMap",
  props: {
    ifRegion: {
      type: Object,
      required: false,
    },
  },
  emits: ['send_data'],
  data() {
    return {
      mapCoordinates: null,
      address: null,
      placemarks: [],
      searchQuery: "",
      showSuggestions: false,
      suggestions: [],
    };
  },
  mounted() {
    document.cookie = "SameSite=None; Secure";
    if (this.ifRegion) {
      this.searchQuery = this.ifRegion;
    }
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=ec368ad2-d656-4913-bc3c-a68e2158725e&lang=ru_RU`;
    script.onload = () => {
      ymaps = window.ymaps;
      this.initializeMap();
    }
    document.head.appendChild(script);
  },
  methods: {
    initializeMap() {
      ymaps.ready(() => {
        this.map = new ymaps.Map("map", {
          center: [51.13547408998441, 71.44767822265625],
          zoom: 12,
          controls: [
            "zoomControl",
            "geolocationControl",
            "fullscreenControl",
            "rulerControl",
          ],
        });

        this.map.events.add("click", async (e) => {
          const target = e.get("target");
          if (target && target instanceof ymaps.Placemark) {
            // Clicked on a placemark, set the placemark data
            const coords = target.geometry.getCoordinates();
            this.getAddress(coords);
            this.mapCoordinates = coords;
            this.address = target.properties.get("balloonContentHeader");
            this.$emit("send_data", {
              coordinates: this.mapCoordinates,
              address: this.address,
            });
          } else {
            // Clicked on the map, add a new placemark
            const coords = e.get("coords");
            this.getAddress(coords);
            this.map.geoObjects.removeAll();
            this.placemarks = [];
            const myPlacemark = new ymaps.Placemark(coords, {}, {});
            this.placemarks.push(myPlacemark);
            this.map.geoObjects.add(myPlacemark);
            this.mapCoordinates = coords;
            const res = await ymaps.geocode(coords);
            const firstGeoObject = res.geoObjects.get(0);
            const address = firstGeoObject.getAddressLine();
            this.address = address;
            this.searchQuery = address;
            this.$emit("send_data", {
              coordinates: this.mapCoordinates,
              address: this.address,
            });
          }
        });
      });
    },
    getAddress(coords) {
      ymaps.geocode(coords).then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        this.address = firstGeoObject.getAddressLine();
      });
    },
    updateSuggestions() {
      if (this.searchQuery) {
        ymaps
            .suggest(this.searchQuery, {
              boundedBy: this.map.getBounds(),
            })
            .then((suggestions) => {
              this.suggestions = suggestions;
              this.showSuggestions = true;
            });
        this.searchAddress();
      } else {
        this.showSuggestions = false;
      }
    },
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion.displayName;
      this.showSuggestions = false;
      ymaps.geocode(suggestion.displayName).then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        const coords = firstGeoObject.geometry.getCoordinates();
        this.addPlacemark(coords, suggestion.displayName);
        this.map.setCenter(coords); // Перемещаем центр карты к выбранной точке
        this.map.setZoom(15); // Устанавливаем желаемый уровень масштабирования
      });
    },
    addPlacemark(coords, displayName) {
      this.map.geoObjects.removeAll();
      this.placemarks = [];
      const myPlacemark = new ymaps.Placemark(coords, {}, {});
      this.placemarks.push(myPlacemark);
      this.map.geoObjects.add(myPlacemark);
      this.mapCoordinates = coords;
      this.address = displayName;
      this.$emit("send_data", {
        coordinates: this.mapCoordinates,
        address: this.address,
      });
    },
    searchAddress() {
      if (this.searchQuery) {
        ymaps
            .geocode(this.searchQuery, {
              boundedBy: this.map.getBounds(),
            })
            .then((res) => {
              const firstGeoObject = res.geoObjects.get(0);
              const coords = firstGeoObject.geometry.getCoordinates();
              this.map.setCenter(coords);
              this.map.setZoom(15);
              this.mapCoordinates = coords;
              this.address = firstGeoObject.getAddressLine();
              this.$emit("send_data", {
                coordinates: this.mapCoordinates,
                address: this.address,
              });
            });
      }
    },
  },
};
</script>

<style>
#map {
  height: 300px;
}

.suggestions {
  list-style-type: none;
  padding: 0;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: auto;
  z-index: 15;
}

.suggestions li {
  cursor: pointer;
}
</style>
