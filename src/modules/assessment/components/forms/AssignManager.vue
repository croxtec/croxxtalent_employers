<template>
  <div class="form-data">
    <div class="d-flex align-items-center" style="gap:20px">
        <span class="label">Assign Candidates</span>
        <div class="assigned-list">
            <div class="assignee">
                <span class="assignee-name">johndoe@croxxtalent.io</span>
            <span class="assignee-delete"><i-icon width="15px" icon="material-symbols:close"/> </span>
            </div>
        </div>
    </div>
    <hr style="border-color:var(--primary-200)">
    <div class="d-flex align-items-center" style="gap:20px">
        <span class="label">Assign Manager</span>
        <div class="assigned-list">
            <div class="assignee">
                <span class="assignee-name">johndoe@croxxtalent.io</span>
            <span class="assignee-delete"><i-icon width="15px" icon="material-symbols:close"/> </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.label {
    width: 40%;
    font-size: 13px;
    display: block;
    font-weight: 500;
}
    .assigned-list {
        border: 1px solid var(--primary-200);
        width: 100%;
        padding: 10px;
        border-radius: 20px;
    }

    .assignee {
        display: flex;
        background: var(--primary-50);
        border-radius: 15px;
        padding: 5px 12px;
        font-size: 12px;
        color: var(--primary-500);
        font-weight: 500;
        width: max-content;
        gap: 8px;
    }
</style>