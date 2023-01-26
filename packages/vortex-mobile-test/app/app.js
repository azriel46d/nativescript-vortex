import Vue from 'nativescript-vue'
import WebView from '@nativescript-community/ui-webview/vue';
import { WebViewTraceCategory } from '@nativescript-community/ui-webview';
import { Trace } from '@nativescript/core';

import BottomSheetPlugin from '@nativescript-community/ui-material-bottomsheet/vue';
import { install } from "@nativescript-community/ui-material-bottomsheet";
install();
Vue.use(BottomSheetPlugin);


Trace.addCategories(WebViewTraceCategory);
Trace.enable();
Vue.use(WebView);

import Home from './components/Home'

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
