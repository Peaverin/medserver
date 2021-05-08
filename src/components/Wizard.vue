<template>
  <div class="container">
    <div class = "row">

    <div v-for="(step, index) in steps" v-bind:key="step.id" :class = "'col ' + step.completed">
      <div v-if="step.active === true" class ="wizard_step">
        <button class="wizard_btn wizard_active" disabled>{{index + 1}}</button>
        <p class = "wizard_txt wizard_active"> {{step.name}} </p>
      </div>
      <div v-else-if="step.completed === true">
        <button class="wizard_btn wizard_completed" @click="$router.push(step.path)">{{index + 1}}</button>
        <p class = "wizard_txt wizard_completed"> {{step.name}} </p>
      </div>
       <div v-else-if="step.unlocked === true">
        <button class="wizard_btn wizard_unlocked" @click="$router.push(step.path)">{{index + 1}}</button>
        <p class = "wizard_txt wizard_unlocked"> {{step.name}} </p>
      </div>
      <div v-else>
        <button class="wizard_btn wizard_disabled" disabled>{{index + 1}}</button>
        <p class = "wizard_txt wizard_disabled"> {{step.name}} </p>
      </div> 
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Wizard',
  data () {
    return {
      steps: [
        {
          name: 'Catàleg',
          path: '/products',
          active: true,
          completed: false,
          unlocked: true
        },
        {
          name: 'Documents',
          path: '/requestPicsPrescription',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'Quan?',
          path: '/chooseDateTime',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'On?',
          path: '/chooseDestination',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'Pagament',
          path: '/choosePaymentMethod',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'Resum comanda',
          path: '/orderSummary',
          active: false,
          completed: false,
          unlocked: false
        }

      ]
    }
  },
  components: {
  },
  computed:{
    currentpathNameWizard (){
      console.log(this.$router.name)
      console.log(1)
      return 0
    }
  },
  mounted:function(){
    console.log('a')
  },
  watch:{
    $route (to, from){
        var fromStep;
        var fromStepIndex;
        var toStep;
        var toStepIndex;
        for (var i = 0; i<this.steps.length; i++){
            if(this.steps[i].path === from.path){
              fromStep = this.steps[i];
              fromStepIndex = i;
            }
            if(this.steps[i].path === to.path){
              toStep = this.steps[i];
              toStepIndex = i;
            }
        }
        //Si adelantamos un paso quiere decir que completamos el anterior:
        if(toStepIndex > fromStepIndex){
          fromStep.completed = true;
        }
        fromStep.active = false;
        toStep.active = true;
        toStep.unlocked = true;
    }
} 
}

</script>

<!-- Add "s
    CenteredButtoncoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.wizard_btn{
  --wizard_btn_size:60px;
}
.wizard_btn{
  width: var(--wizard_btn_size);
  height: var(--wizard_btn_size);
  border-radius: calc(var(--wizard_btn_size)/2);
  background-color: white;
  font-size: calc(var(--wizard_btn_size)/3);
  z-index: 2;

}

.wizard_active{
  border-color: var(--main-color);
  color: black;
}

.wizard_disabled{

}

.wizard_unlocked{
  border-color: var(--main-color-lightest);
}

.wizard_completed{
  border-color: var(--accent-color-1-darker);
}


.col::after{
    border-bottom: 2px solid lightgray;
    width:70%;
    position: absolute;
    content: "";
    right:-55%;
    top:25%;
    z-index:0;
}
.col.true::after {
    border-bottom: 2px solid var(--accent-color-1-darker);
}
.col:last-child::after {
display:none;
}
</style>