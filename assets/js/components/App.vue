<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
            <!-- Users box-->
           <Left />
            <!-- Chat Box-->
           <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
    import Left from "./Left/Left";
    import Right from "./Right/Right";
    export default {
        components: {Left, Right}
    }
</script>
