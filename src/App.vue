<template>
  <div>
    <Navbar />
    <Sidebar>
      <router-view></router-view>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from './layouts/Sidebar'
import Navbar from './layouts/Navbar'

export default {

  components: {
    Sidebar,
    Navbar
  }

}
</script>

