<template>
  <div>
    <button class="primary--button" @click="$emit('buttonClicked')">
      <slot />
    </button>
  </div>
</template>
