<template>
    <div class="search_ticket">
        <v-select
            v-model="from"
            class="from dropdown"
            :options="cities.filter(city => city != to)"
            placeholder="Choose departure station"
        />
        <!-- <input v-model="from" type="text" class="input from" placeholder="Departure"> -->
        <div class="direction_switcher" @click="changeDirection()">
            <img src="../assets/icons/opposite_arrows.svg" class="icon" alt="">
        </div>
        <v-select
            v-model="to"
            class="to dropdown"
            :options="cities.filter(city => city != from)"
            placeholder="Choose destination station"
        />
        <Datepicker
            v-model="date"
            placeholder="Choose date"
            input-class="date"
            :disabledDates="disabledDates"
        />
        <div class="search-button">
            <img
                src="../assets/icons/search.svg"
                class="icon"
                alt=""
                v-if="!isLoading"
                @click="search()">
            <LoadingIcon v-else/>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import LoadingIcon from '../components/LoadingIcon.vue'
export default {
    components: {
        Datepicker,
        LoadingIcon
    },
    props: ['isLoading'],
    data() {
        return {
            from: '',
            to: '',
            date: null,
            disabledDates: {
                to: new Date(Date.now() - 8640000)
            },
            cities: ['Nursultan', 'Almaty']
        }
    },
    methods: {
        changeDirection() {
            const temp = this.from;
            this.from = this.to;
            this.to = temp;
        },
        search() {
            if(!(this.from && this.to && this.date)) {
                alert('fill the form fully')
                return
            }
            this.$emit(
                'submit', 
                {
                    from: this.from,
                    to: this.to, 
                    date: this.date
                }
            )
        }
    }
}
</script>

<style lang="scss">
    .search_ticket{
        display: flex;
        justify-content: flex-start;
        padding: 24px;
        background-color: rgba(0,0,0, .2); 
        width: 100%;
        align-items: center;
        flex-wrap: wrap;
        .dropdown{
            flex: 1;
            .vs__dropdown-toggle{
                width: 100%;
                height: 40px;
                border: none;
                border-radius: 0;
                padding-left: 12px; 
                font-size: 16px;
                border-left: 1px solid #ccc;
                background: #fff;
                color: #000;
            }
        }
        .direction_switcher{
            display: flex;
            align-items: center;
            padding: 0 4px;
            height: 40px;
            border-left: 1px solid #ccc;
            background: #fff;
            .icon{
                width: 20px;
            }
            &:hover{
                cursor: pointer;
            }
        }
        .date{
            flex: 1;
            width: 250px;
            height: 40px;
            background: #fff;
            display: flex;
            font-size: 16px;
            padding-left: 4px;
        }
        .search-button{
            width: 40px;
            height: 40px;
            background-color: #fb7b4c;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{
                width: 25px;
                &:hover{
                    cursor: pointer;
                }
            }
        }
        
    }
</style>