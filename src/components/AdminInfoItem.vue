<template>
<div class="body">
    <div class="search">
        <span class="stext">Search</span> 
        <input type="search">
    </div>
    <div class="divTable" style="border: 1px solid #000;" >
        <div class="divTableBody">
            <div class="divTableRow ">
                <div class="divTableCell head">Ticket Number</div>
                <div class="divTableCell head">Passenger Name</div>
                <div class="divTableCell head">Departure Station</div>
                <div class="divTableCell head">Departure Time</div>
                <div class="divTableCell head">Arrival Station</div>
                <div class="divTableCell head">Arrival Time</div>
                <div class="divTableCell head">Seat</div>
                <div class="divTableCell head">Reserved Time</div>
                <div class="divTableCell head">Edit</div>
            </div>
            <div class="divTableRow">
                <div class="divTableCell">{{ticket.ticketNum}}</div>
                <div class="divTableCell">{{ticket.userFname}}&nbsp;{{ticket.userLname}}</div>
                <div class="divTableCell">{{ticket.from}}</div>
                <div class="divTableCell">{{ticket.destDay}}&nbsp;{{ticket.destTime}}</div>
                <div class="divTableCell">{{ticket.to}}</div>
                <div class="divTableCell">{{ticket.arrDay}}&nbsp;{{ticket.arrTime}}</div>
                <div class="divTableCell">{{ticket.seats[0].type}}&nbsp;{{ticket.seats[0].price}}</div>
                <div class="divTableCell">reservation time</div>
                <div class="divTableCell">
                    <button class="button" id="edit">Edit</button>
                </div>
            </div>
        </div>  
    </div>
</div>
</template>

<script>
export default {
    props: {
        ticket: {
            type: Object,
            default: () => { 
                return {
                    userFname: 'Mika',
                    userLname: 'Akanova',
                    ticketNum: '00000001',
                    docID: '1234567',
                    trainNum: "016T",
                    trainType: "talgo",
                    from: "Nur-Sultan",
                    to: "Almaty",
                    destTime:"08:00",
                    destDay:"28 November",
                    arrTime:"09:00",
                    arrDay:"29 November",
                    duration:"22 h 54 min",
                    seats: [{
                        type:"lux",
                        count:"100",
                        price:"8995"
                    }, {
                        type:"standard",
                        count:"500",
                        price:"5000"
                    }]
                }
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .body{
        padding: 35px;
        
    }
    .stext{
            margin-right: 10px;
    }
    .divTable{
        margin-top: 15px;
        display: table;
        width: 100%;
    }
    .divTableRow {
        display: table-row;
    }
    .divTableCell{
        border: 1px solid #999999;
        display: table-cell;
        padding: 3px 10px;
        
    }
    .head{
        font-weight: bold;
    }
    .divTableHeading {
        background-color: #EEE;
        display: table-header-group;
        font-weight: bold;
    }
    .divTableFoot {
        background-color: #EEE;
        display: table-footer-group;
        font-weight: bold;
    }
    .divTableBody {
        font-size:14px;
        display: table-row-group;
        .button{
            width: 88px;
            height: 30px;
            box-shadow: none;
            padding: 7px 12px 8px;
            border-radius: 3px 3px 3px 3px;
            touch-action: manipulation;
            background-color: #fb7b4c;
            border-color: #fb7b4c;
            color: white;
        }
    }
</style>