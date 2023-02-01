<template>
  <div>
    <button class="primary--button_border" @click="$emit('buttonClicked')">
      <slot />
    </button>
  </div>
</template>
