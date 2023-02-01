<template>
  <div>
    <button
      class="primary--button py-3"
      style="font-weight: 300"
      @click="$emit('buttonClicked')"
    >
      <slot />
    </button>
  </div>
</template>
