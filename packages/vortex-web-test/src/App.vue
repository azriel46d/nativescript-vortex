<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Vortex from 'nativescript-vortex';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue';

const center = ref({ lat: 35.917973, lng: 14.409943 });
const options = ref({
  styles: [
    // here comes the styles your
  ],
});
const markers = ref([
  {
    position: {
      lat: 35.917973,
      lng: 14.409943,
    },
    title: 'Malta',
    image:
      'https://www.state.gov/wp-content/uploads/2018/11/Malta-2109x1406.jpg',

    description:
      "Malta is an archipelago in the central Mediterranean between Sicily and the North African coast. It's a nation known for historic sites related to a succession of rulers including the Romans, Moors, Knights of Saint John, French and British. It has numerous fortresses, megalithic temples and the Ħal Saflieni Hypogeum, a subterranean complex of halls and burial chambers dating to circa 4000 B.C. ",
  },
  {
    position: {
      lat: 36.0443,
      lng: 14.251222,
    },
    title: 'Gozo',
    image:
      'https://www.weseektravel.com/wp-content/uploads/2022/07/things-to-do-gozo-island-malta-1-768x480.jpg',
    description: "Gozo is an island in the Mediterranean Sea, one of 21 that make up the Maltese archipelago. Inhabited for thousands of years, it shows evidence of historic immigration and rule by the Phoenicians, Romans, Arabs, Sicilians, French and British, among others. It’s known for its Neolithic Ġgantija Temple ruins, rural hiking paths, beaches and scuba-diving sites"
  },
  {
    position: {
      lat: 35.821079,
      lng: 14.456476,
    },
    title: 'Blue Grotto',
    image:
      'https://image.yachtcharterfleet.com/w640/h309/qh/cs0-273-4033-1948/k854ee376/directory/profile/photo/1844784.jpg',
    description: "The Blue Grotto refers to a number of sea caverns on the south east coast of Malta, a short distance from the fishing harbour limits of Wied iż-Żurrieq, Malta"
  },
]);
const isOpen = ref(false);

const onClick = (marker) => {
  center.value = marker.position;
  if (Vortex.isNative()) {
    Vortex.publish('open-bottomsheet', marker);
  } else {
    setIsOpen(marker);
  }
};

function setIsOpen(value) {
  isOpen.value = value;
}
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Nativescript - 🌪️" />
    </div>
  </header>

  <main>
    <GMapMap
      :center="center"
      :options="options"
      :zoom="10"
      map-type-id="terrain"
      style="width: 100%; height: 70vh"
    >
      <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="onClick(m)"
        />
      </GMapCluster>
    </GMapMap>
  </main>
  <Dialog
    :open="isOpen"
    @close="setIsOpen"
    class="fixed bg-black bg-opacity-40 top-0 left-0 w-full h-full flex items-center justify-center p-4"
  >
    <DialogPanel
      class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
    >
      <DialogTitle
        as="h3"
        class="text-lg font-medium leading-6 text-gray-900"
        >{{ isOpen.title }}</DialogTitle
      >
      <DialogDescription> </DialogDescription>

      <p>
        <img class="w-full" :src="isOpen.image" alt="isOpen.title" />
      </p>

      <button @click="setIsOpen(false)">Ok</button>
    </DialogPanel>
  </Dialog>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
