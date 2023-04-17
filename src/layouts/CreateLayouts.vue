<template>
    <div>
        <CreateHeader/>
      <div class="spacer container">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
import CreateHeader from '@/components/navigation/CreateHeader.vue';
  export default {
  components: { CreateHeader },
    name: "CreateLayout",
  };
  </script>
  