<template>
  <transition name="fade">
    <div class="modal-mask">
      <div class="modal-content">
        <header>
          <slot name="header"></slot>
        </header>
        <main class="mt-3">
          <slot name="body"></slot>
        </main>
        <footer>
          <slot name="actions"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 1s;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.6s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.3, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(15px);
  opacity: 0;
}
</style>
