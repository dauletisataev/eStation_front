<template>
  <div class="AdminPage">
      <AdminInfoItem></AdminInfoItem>
      <AdminEditForm></AdminEditForm>
  </div>
</template>

<script>
import AdminInfoItem from '@/components/AdminInfoItem.vue'
import AdminEditForm from '@/components/AdminEditForm.vue'
export default {
    components: {
        AdminInfoItem,
        AdminEditForm
    },
    mounted() {
        console.log(this.currentRouteName)
        if(this.$route.name === 'admin')
            this.$router.push('/admin')
    },
    computed: {
        currentRouteName() {
            return this.$route.name
        } 
    }
}
    </script>

<style lang="scss" scoped>
    .AdminPage{
        padding-top: 50px;
    }
</style>