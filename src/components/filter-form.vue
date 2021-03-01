<template>
    <div class="filter-card">
    <h6>Filter:</h6>
    <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2 drp-btn">
    <b-dropdown-item>Last Added</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Most Used</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Recent</b-dropdown-item>
  </b-dropdown>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .filter-card{
        padding: 1rem;
        margin:.5rem;
        border-radius: 3px;
        border: transparent;
        background-color: #ccc;
        box-shadow: 0 15px 30px rgba(0,0,0,.2);
        height: 400px;
        width:200px;
    }
    .drp-btn{
        padding: 1rem !important;
        width: 90%;
    }
</style>