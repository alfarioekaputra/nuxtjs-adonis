<template>
  <div>
    <navbar/>
    <div class="flex">
      <div class="bg-green-darker w-64 h-auto p-2 text-white">
        <sidebar/>
      </div>
      <div class="flex">
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>
