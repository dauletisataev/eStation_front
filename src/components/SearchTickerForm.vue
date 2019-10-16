<template>
    <div class="search_ticket">
        <input type="text" class="input from" placeholder="откуда">
        <div class="direction_switcher">
            <img src="../assets/icons/opposite_arrows.svg" class="icon" alt="">
        </div>
        <input type="text" class="input to" placeholder="куда">
        <div class="date">
            <div class="text">Выберите дату</div>
            <div class="icon"></div>
        </div>
        <div class="search-button">
            <img src="../assets/icons/search.svg" class="icon" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .search_ticket{
        display: flex;
        justify-content: flex-start;
        padding: 24px;
        background-color: rgba(0,0,0, .2); 
        width: 100%;
        align-items: center;
        flex-wrap: wrap;
        .input{
            width: 300px;
            height: 40px;
            border: none;
            flex: 1;
            padding-left: 12px; 
            font-size: 16px;
            border-left: 1px solid #ccc;
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
            border: 1px solid #ccc;
            align-items: center;
            padding: 12px; 
            .text{
                flex: 1;
                &:hover{
                    cursor: pointer;
                }
            }
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