<template>
<div>
    <div class="carriage main">
        <!-- <div class = "carriage_details"> -->
            <div class = "carriage_type">
               <select v-model="selected">
                    <option disabled value="">Select carriage</option>
                    <option v-for="carriage in getCarriages()" :key="carriage.id" :value="carriage.id">Carriage {{carriage.id}}</option>
                </select>
                    <!-- <span>Selected: {{ selected }}</span> -->
            </div>
            <!-- <div class = "carriage_numb row"> 
                 
                <div class = "car col" v-on:click="selectedCarriageIndex = 1 " :class="{'active': selectedCarriageIndex == 1}"> 
                    <span>Car #1</span>
                </div>
                <div class = "car col" v-on:click="selectedCarriageIndex = 2 " :class="{'active': selectedCarriageIndex == 2}"> 
                    <span>Car #2
                        <p class = "sfont center">
                            {{car_type}}</p>
                    </span>
                </div>
                <div class = "car col" v-on:click="selectedCarriageIndex = 3 " :class="{'active': selectedCarriageIndex == 3}"> 
                    <span>Car #3
                        <p class = "sfont center">
                            {{car_type}}</p>
                  
                    </span>
                </div>
                <div class = "car col" v-on:click="selectedCarriageIndex = 4" :class="{'active': selectedCarriageIndex == 4}"> 
                    <span>Car #4
                        <p class = "sfont center">
                            {{car_type}}</p>
                    </span>
                </div>
            </div>
            <div class = "seats_list">
                <div class = "row">
                   
                    <div class = "col">
                        <div class = "row">
                    <input type="checkbox" id="1" value="1" v-model="checkedNames">
                    <label for="1">1</label></div>
                    <div class = "row">
                    <input type="checkbox" id="2" value="2" v-model="checkedNames">
                    <label for="2">2</label></div>
                    </div>
                    <div class = "col">
                        <div class = "row">
                    <input type="checkbox" id="3" value="3" v-model="checkedNames">
                    <label for="3">3</label></div>
                    <div class = "row">
                    <input type="checkbox" id="4" value="4" v-model="checkedNames">
                    <label for="4">4</label></div>
                    </div>
                    <div class = "col">
                        <div class = "row">
                    <input type="checkbox" id="5" value="5" v-model="checkedNames">
                    <label for="5">5</label></div>
                    <div class = "row">
                    <input type="checkbox" id="6" value="6" v-model="checkedNames">
                    <label for="6">6</label></div> </div>
                    <div class = "col">
                        <div class = "row">
                    
                     <input type="checkbox" id="7" value="7" v-model="checkedNames">
                    <label for="7">7</label></div>
                    
                    <div class = "row">
                    <input type="checkbox" id="8" value="8" v-model="checkedNames">
                    <label for="8">8</label></div></div></div>
                   <div class= "res"> Selected seats: {{ checkedNames }} <br>
                    Selected Carriage # {{selectedCarriageIndex}} </div>
               </div>
               </div> </div>
         </div> -->
        <div class = "available_seats" v-if="selected">
            <div class="list">
                <div v-for="seat in getSeats(selected)" :key="seat.id" class="item" >
                    <div v-if="seat.free == 0">
                        X {{seat.id}}
                    </div>
                    <div v-else>
                        <input type="checkbox" :id="seat.id" :value="seat.id" v-model="checkedSeats">
                        <label for="seat.id">{{seat.id}}</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class= "col"> Selected seats: {{ checkedSeats }}</div>
                <div class="col right">
                    <button class="button">Buy</button>
                </div>
            </div>
            
        </div>      

</div> 
</div>
</template>




<script>
export default {
    data() {
        return {
            fourth: 0,
            selected: '',
            selectedCarriageIndex: -1,
            checkedSeats:[],
            seats: [
                {
                    id: 1,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 1,
                },
                {
                    id: 2,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: false,
                    number: 2,
                },
                {
                    id: 3,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 3,
                },
                {
                    id: 4,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 5,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 6,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 7,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                 {
                    id: 8,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 9,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 1,
                },
                {
                    id: 10,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: false,
                    number: 2,
                },
                {
                    id: 11,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 3,
                },
                {
                    id: 12,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 13,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 14,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 15,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 16,
                    carriage_id: 1,
                    carriage_type: 0,
                    free: true,
                    number: 1,
                },
                {
                    id: 17,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 1,
                },
                {
                    id: 18,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: false,
                    number: 2,
                },
                {
                    id: 19,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 3,
                },
                {
                    id: 20,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 21,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 22,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 23,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 24,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 1,
                },
                {
                    id: 25,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 2,
                },
                {
                    id: 26,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 3,
                },
                {
                    id: 27,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 28,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                },
                {
                    id: 29,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: false,
                    number: 4,
                },
                {
                    id: 30,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: false,
                    number: 4,
                },
                {
                    id: 31,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: false,
                    number: 4,
                },
                {
                    id: 32,
                    carriage_id: 2,
                    carriage_type: 0,
                    free: true,
                    number: 4,
                }
                
            ]
        }
    },
    mounted() {
        console.log(this.getCarriages());
    },
    methods: {
        getSeats(some_carriage) {
            let available = []
            this.seats.forEach(seat => {
                if (seat.carriage_id == some_carriage)
                {
                    available.push(seat);
                }
            });
            return available;
        },
        getCarriages() {
            let carriages = {
            }
            this.seats.forEach(seat => {
                const carriageId = seat.carriage_id
                if(carriages[carriageId]) {
                    carriages[carriageId].seatsCount += 1;
                } else {
                    carriages[carriageId] = {
                        seatsCount: 1,
                        id: carriageId,
                        type: seat.carriage_type
                    }
                }
            });

            return Object.values(carriages);
        }
    }
    
}
    


</script>

<style lang="scss" scoped>
    .main{
        padding-top: 10px;
        padding-left: 10px;
        box-shadow: 0 1px 5px rgba(0,0,0,.15);
    }
    .button{
            width: 120px;
            height: 45px;
            box-shadow: none;
            padding: 7px 12px 8px;
            border-radius: 3px 3px 3px 3px;
            touch-action: manipulation;
            background-color: #fb7b4c;
            border-color: #fb7b4c;
            color: white;
            justify-content: right;
            margin-right: 10px;
        }
    .right{
        align-items: flex-end !important;
        }
    .carriage{
        display: inline-block;
        padding: 5px;
        margin:10px 0;
        width:100%    
        
    }
    .seats_list{
        border-radius: 3px 3px 3px 3px;
        border-color: black;

    }
    .active span{
         
        background-color: rgb(207, 164, 22);
    }
    .carriage_type {
        align-self: center;
    }
    .car{
        display: flex;
        align-items: center;
        width: 120px;
            height: 40px;
            box-shadow: none;
            //padding: 7px 12px 8px;
            border-radius: 3px 3px 3px 3px;
            touch-action: manipulation;
            background-color:rgb(156, 123, 13);
            border-color: rgb(156, 123, 13);
            color: white;
    }
    .sfont{ font-size: 0.775em; 
            color: rgb(238, 228, 228);
        }
    .row{
            display: flex;
            flex-direction: row;
            flex-flow: row wrap;
            flex: 1;
            margin-right:5px;
            margin-bottom: 5px; 
        }
        .col{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-basis: 100%;
            flex: 1;
            margin-right:5px;
            margin-bottom: 5px; 
        }
        .center{
            align-items: center;
        }
    span{
        //background:gray;
        display:inline-block;
        //padding: 5px;
        color:#fff;
        height:100%;
        //margin:10px 0;
        //width: 100%; 
    }
    .available span{
        background-color: rgb(233, 219, 22);
    }

    .list{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 120px;
        width:100%
    }
    .item{
        width: 50px;
        height: 50px;
        padding: 7px 12px 8px;
        border-radius: 3px 3px 3px 3px;
        touch-action: manipulation;
        background-color: #fb7b4c;
        border-color: #fb7b4c;
        color: white;
        box-shadow: 0 1px 5px rgba(0,0,0,.15);
        margin: 2px;
    }
    
</style>