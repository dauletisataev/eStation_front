<template>
  <div>
    <PassedTicket
      v-for="ticket in tickets"
      :key="ticket.id"
    />
  </div>
</template>

<script>
import PassedTicket from '../../components/PassedTicket.vue'
export default {
  components: {
    PassedTicket
  },
  data() {
    return {
      tickets: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
      ]
    }
  }
}
</script>

<style>

</style>