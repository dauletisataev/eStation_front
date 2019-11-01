<template>
  <div class="home">
    <div class="search_container">
      <div class="swithcer">
        <div
          class="tab schedule"
          :class="{'active': currentRoute =='schedules'}"
          @click="$router.push('/schedules')">
          <span>Schedules</span>
        </div>
        <div
          class="tab buy_ticker"
          :class="{'active': currentRoute =='tickets' || currentRoute =='home'}"
          @click="$router.push('/tickets')">
          Buy tickets
        </div>
      </div>
      <div class="search_form">
        <SearchTickerForm
          @submit="searchTicket"
          :isLoading="isLoading"
          v-if="currentRoute =='tickets' || currentRoute =='home'"
        />
        <div class="under_development" v-else>
          We are under development yet...
        </div>
      </div>
    </div>
    
    <div class="tickets"
          id="tickets" ref="tickets" v-if="currentRoute =='tickets' || currentRoute =='home'">
      <TicketItem class="ticket" v-for="ticket in tickets" :key="ticket.id">
      </TicketItem>
      <div class="bottom" ref="tickets_bottom"></div>
    </div>
  </div>
</template>

<script>
import SearchTickerForm from '../components/SearchTickerForm.vue'
import TicketItem from '../components/TicketItem.vue'
export default {
  components: {
    SearchTickerForm,
    TicketItem
  },
  data() {
    return {
      someData: 'I am some data from component',
      isLoading: false,
      tickets: []
    }
  },
  methods: {
    searchTicket(payload) {
      this.isLoading = true;
      setTimeout( () => {
        this.isLoading = false;
        this.tickets = this.tickets.concat([
          {id: this.tickets.length+1},
          {id: this.tickets.length+2},
          {id: this.tickets.length+3},
          {id: this.tickets.length+4}
        ])
        var element = this.$refs.tickets_bottom;
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
      console.log(payload);
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 200vh;
    display: flex;
    flex-direction: column;
    .search_container{
      width: 100%;
      min-height: 500px;
      padding: 96px 48px; 
      background-image: url('../assets/background.jpg');
      background-size:     cover;
      background-repeat:   no-repeat;
      background-position: center center;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .swithcer{
        display: flex;
        border: 1px solid #fff;
        border-radius: 4px;
        font-family: 'Helvetica Neue' !important;
        .tab{
            padding: 8px 23px;
            color: #fff;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 16px;
            &.active{
              background-color: rgba(255,255,255,.5);
            }
            &:hover{
              background-color: rgba(255,255,255,.5);
              cursor: pointer;
            }
        }
      }

      .search_form{
        margin-top: 40px;
        width: 100%;
      }
    }
  }
  .tickets{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    padding: 0 48px;
    .ticket{
      margin-top: 48px;
      width: 100%;
    }
  }

  .under_development{
    width: 100%;
    height: 100px;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 26px;
  }
</style>
