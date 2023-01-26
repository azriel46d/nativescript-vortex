# Nativescript Vortex

This repository shows the power of nativescript together with `@nativecript-community/ui-webview` two way binding between the webview and the native application.


The repository consists of 
1. A Web Application written in vue
2. A tiny library called `nativescript-vortex` which adds some syntactic sugar around `@nativescript-community/ui-webview`'s bridge on the web application
2. A Nativescript application which instantiates the WebView, listens to events coming from the Web Application and actions them as Native code. The sky is the limit here 🎉.

The repository uses NX (first forey into NX 😅) . Using `nx run vortex-mobile-test:builder` to run the build the web app, copy it to assets folder in {N} and run the android app. Use `nx run vortex-web-test:dev` to load the local server. 

TODO: Enhance so that when the web app in dev is changed, the assets are copied to the {N} app

Inspired by [Ionic Portals](https://ionic.io/portals) 👏🏼