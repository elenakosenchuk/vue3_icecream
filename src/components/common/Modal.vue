<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>  

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          
            <slot name="footer">
                <div class="modal-footer">
              default footer
              <button class="btn modal-default-button" @click="$emit('close')">
                OK
              </button>
              </div>
            </slot>
          
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"Modal"
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;  
}

.modal-container {
  width: 510px;
  height: 450px;
  margin: 0 auto;
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
  .modal-header{    
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;  
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (max-width: 590px){
  .modal-container {
    width: 90%;
    height: 450px;
  }
  .modal-container .modal-header{
    font-size: 22px;
  }
}

</style>