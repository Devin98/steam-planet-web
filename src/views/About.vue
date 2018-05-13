<template>

  <ion-page class="show-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>
          About
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label full>1234566</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Start Time</ion-label>
          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A"></ion-datetime>
        </ion-item>
      </ion-list>
      <ion-icon name="heart"></ion-icon>
    </ion-content>
  </ion-page>

</template>

<script>
    export default {
        name: 'About',
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
