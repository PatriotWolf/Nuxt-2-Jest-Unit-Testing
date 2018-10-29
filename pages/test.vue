<template>
  <div>
    <div class="myDiv">Counter: {{ counter }}</div>
    <button
      class="myButton btn btn-danger"
      @click="counter++"
    >Increment
    </button>
    <b-button>
      asdas
    </b-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0
        }
    }
};
</script>