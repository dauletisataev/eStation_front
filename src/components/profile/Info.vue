<template>
  <div class="settings">
    <div class="block">
        <div class="block-name">
            <div class="block-name--title">
                Personal Info
            </div>
            <div class="block-name--info">
            </div>
        </div>
        <div class="block-form">
            <p class="firstRow">Name</p>
            <input type="text">
            
            <p>Surname</p>
            <input type="text">
            
            <p>Email</p>
            <input type="text">

            <p>National ID number</p>
            <input type="text">
            <div class="block-name--info" style="color: #7c970f">
                
            </div>
        </div>
    </div>
    <div class="btn_wrapper">
        <div
            depressed
            @click="saveProfileInfo()"
            class="form_btn"
            :loading="false">
            
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  $break-small: 500px;
  $break-medium: 800px;
  $break-large: 1200px;
.settings{
    .block{
        display: flex;
        
        justify-content: space-between;
        .block-name{
            display: flex;
            flex-direction: column;
            // width: 216px;
            &--title{
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
                color: #fff;
                @media screen and (max-width: $break-medium) {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                }
            }
            &--info{
                margin-top: 8px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 18px;
                color: rgba(51, 50, 50, 0.64);
                @media screen and (max-width: $break-medium) {
                    font-size: 12px;
                    line-height: 14px;
                }
            }
        }
        .block-form{
            flex: 1;
            background: #FFFFFF;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
            border-radius: 2px;

            input{
                background: #FFFFFF;
                border: 2px solid rgba(51, 50, 50, 0.08);
                box-sizing: border-box;
                border-radius: 4px;
                padding: 11px;
                width: 100%;
                color: #000;
            }
            p{
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 18px;
                display: flex;
                align-items: center;
                color: #333232;
                margin: 16px 0px 7px;
                @media screen and (max-width: $break-medium) {
                    font-size: 12px;
                    line-height: 14px;
                }
            }
            .firstRow{
                margin-top: 0px;
            }
            
        }
    }

}

.btn_wrapper{
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    .form_btn {
        border-radius: 4px;
        background-color: #fb7b4c !important;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #FFFFFF;
        padding: 8px 16px;
    }
}

@media screen and (max-width: $break-medium) {
    .block{
        flex-direction: column;
    }
    .block-name{
        width: auto;
        padding: 0px 0px 10px;
    }
    .block-form{
        width: auto;
        padding: 16px;
    }
}
@media screen and (min-width: $break-medium) {
    .block{
        flex-direction: row;
    }
    .block-name{
        width: 216px;
    }
    .block-form{
        padding: 24px;
    }
}
</style>