<template>
  <div>
      <UpcomingTicket
        v-for="ticket in tickets"
        :key="ticket.id"
      />
  </div>
</template>

<script>
import UpcomingTicket from '../../components/UpcomingTicket.vue'
export default {
  components: {
    UpcomingTicket
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