<template>
<div>
  <HeaderNavBar />
  <router-view></router-view>

  <FooterArea />
</div>
</template>

<script>

import HeaderNavBar from "./components/HeaderNavBar.vue"
import FooterArea from "./components/FooterArea.vue"
//import WelcomePage from "./views/WelcomePage.vue"

export default {
  name: 'App',
  components: {
    HeaderNavBar,
    FooterArea//,
//    WelcomePage
  }
}
</script>
