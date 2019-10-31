<template>
  <div class="upcomingTrips">
      <div class="row mainticket">
          <div class="maincol col">
                <div class="row ">
                      <div class="col sfont nowrap line">Ticket Number </div>
                      <div class="col nowrap line">{{ticket.ticketNum}}</div>
                </div>
                <div class="row">
                  <div class="col sfont nowrap line">Passenger </div>
                  <div class="col nowrap line">{{ticket.userFname}}&nbsp;{{ticket.userLname}}</div>
                </div>
                <div class="row">
                  <div class="col sfont nowrap line">Document</div>
                  <div class="col nowrap line">{{ticket.docID}}</div>
                </div>
          </div>
          <div class="maincol col">
              <div class="row"><div class="line"><span class="icon" id="trainicon"></span></div>
              <div class="col">{{ticket.trainNum}}</div> 
              <div class="col sfont">{{ticket.trainType}}</div>
          </div>
              <div class="row">
                <div class="nowrap line bold">
                  {{ticket.from}}
                </div>
                  <div class="line"><span class="icon" id="arrowicon"></span></div>
                  <div class="bold nowrap line">
                  {{ticket.to}}
                  </div>
                </div>
          </div>
          <div class="maincol col longer margin-top">
              <div class="row nowrap">
                <div class="col center">
                    <div class="row bold">{{ticket.destTime}}</div>
                    <div class="row sfont">{{ticket.destDay}}</div>
                </div>
                <div class="col center">
                    <div class="row bold">{{ticket.duration}}</div>
                    <div class="row sfont">on the way</div>
                </div>
                <div class="col center">
                    <div class="row bold">{{ticket.arrTime}}</div>
                    <div class="row sfont">{{ticket.arrDay}}</div>
                </div>
              </div>
          </div>
          <div class="maincol col">
              <div class="row nowrap">
                  <div class="col sfont">{{ticket.seats[0].type}}</div>
                  <div class="col bold">{{ticket.seats[0].price}}</div>
              </div>
          </div>
          <div class="col center">
              <button class="button">Return the ticket</button>
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
    .upcomingTrips{     
        background: #fff; 
        .mainticket{
            padding-top: 10px;
            padding-left: 10px;
            box-shadow: 0 1px 5px rgba(0,0,0,.15);
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
        .button{
            width: 120px;
            height: 55px;
            box-shadow: none;
            padding: 7px 12px 8px;
            border-radius: 3px 3px 3px 3px;
            touch-action: manipulation;
            background-color: #fb7b4c;
            border-color: #fb7b4c;
            color: white;
        }
        .longer{
            flex-grow: 2;
        }
        .nowrap{
            flex-wrap: nowrap;
            overflow: hidden;
            white-space: nowrap;
        }
        .sfont{
            font-size: 0.775em; 
            color: grey;
        }
        .bold{
            font-weight:bold;
        }
        #arrowicon{
            margin-right:3px;
            margin-left: 3px; 
            width: 10px;
            height: 10px;
            display: inline-block;
            background-image: url('../assets/icons/right-arrow.svg');
        }
        #trainicon{
            margin-right:30px;
            margin-left: 5px; 
            width: 20px;
            height: 20px;
            display: inline-block;
           
            background-image: url('../assets/icons/train.svg');
        }
        .line{
            display: flex;
            flex-direction: column;
            justify-content: center;
            object-fit: cover;
        }
        .maincol{
            border-right-style:inset; 
            border-right-width: 1.5px;
            margin-right: 20px;
            margin-left: 3px;
        }
        .center{
            align-items: center;
        }
        .margin-top{
            margin-top: 10px;
        }
    }
</style>