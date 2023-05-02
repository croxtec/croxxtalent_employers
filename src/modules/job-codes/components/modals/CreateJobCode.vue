<template>
    <modal-dialog>
      <template #header>
          <div class="d-flex justify-content-center align-items-center w-100">
              <h4 class="text-center w-100" style="font-weight:600">
                  Create Job Code
              </h4>
              <span role="button" class="d-flex justify-content-end w-auto">
                  <i-icon icon="material-symbols:close" width="20px" class="text-danger" />
              </span>
          </div>
      </template>
  
      <template #body>
          <div>
              Body
          </div>
      </template>
  
      <template #actions>
          <div>
              Footer
          </div>
      </template>
    </modal-dialog>
  </template>
  
  <script>
  import ModalDialog from '@/components/modals/ModalDialog.vue'
  export default {
    components: { ModalDialog },
  
  }
  </script>
  
  <style>
  
  </style>