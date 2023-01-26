<template>
  <Page>
    <ActionBar>
      <Label text="🌪️ Vortex" />
    </ActionBar>

    <GridLayout>
      <AWebView
        :debugMode="true"
        style="width: 100%; height: 100%; background: red"
        src="~/assets/web-app/index.html"
        :webConsoleEnabled="true"
        @open-bottomsheet="openBottomSheet"
        ref="webview"
      />
    </GridLayout>
  </Page>
</template>

<script>
import { AWebView } from '@nativescript-community/ui-webview';
import CardVue from './Card.vue';
export default {
  computed: {
    message() {
      return 'Blank {N}-Vue app';
    },
  },
  methods: {
    openBottomSheet(res) {
      console.log(res.data);
      this.$showBottomSheet(CardVue, {
        animated: true,
        props: res.data,
        peekHeight: 400,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
