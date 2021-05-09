<template>
<div class="wizard">
  <table class="center">
    <tr class>
      <td v-for="step in steps" v-bind:key="step.id" :class = "'' + step.completed">
        <div v-if="step.active === true" class ="wizard_step">
          <button class="wizard_btn wizard_active" disabled><i :class="step.icon"></i></button>
          <p class = "wizard_txt wizard_active"> {{step.name}} </p>
        </div>
        <div v-else-if="step.completed === true">
          <button class="wizard_btn wizard_completed" @click="$router.push(step.path)"><i :class="step.icon"></i></button>
          <p class = "wizard_txt wizard_completed"> {{step.name}} </p>
        </div>
        <div v-else-if="step.unlocked === true">
          <button class="wizard_btn wizard_unlocked" @click="$router.push(step.path)"><i :class="step.icon"></i></button>
          <p class = "wizard_txt wizard_unlocked"> {{step.name}} </p>
        </div>
        <div v-else>
          <button class="wizard_btn wizard_disabled" disabled><i :class="step.icon"></i></button>
          <p class = "wizard_txt wizard_disabled"> {{step.name}} </p>
        </div> 
      </td>
    </tr>
  </table>
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
          icon: 'fas fa-pills',
          active: true,
          completed: false,
          unlocked: true
        },
        {
          name: 'Fotos',
          path: '/requestPicsPrescription',
          icon: 'fas fa-file-medical',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'Quan?',
          path: '/chooseDateTime',
          icon: 'far fa-clock',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'On?',
          path: '/chooseDestination',
          icon: 'fas fa-home',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'Com?',
          path: '/choosePaymentMethod',
          icon: 'fas fa-coins',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'Resum',
          path: '/orderSummary',
          icon: 'fas fa-clipboard-list',
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
  watch:{
    $route (to, from){
        var fromStep;
        var fromStepIndex = -1;
        var toStep;
        var toStepIndex = -1;
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
        if(fromStepIndex === -1){
          for (i = 0; i < this.steps.length; i++){
            this.steps[i].active = false;
            this.steps[i].completed = false;
            this.steps[i].unlocked = false;
          }
          this.steps[0].active = true;
          this.steps[0].unlocked = true;
          return
        }
        if(toStepIndex === - 1){
          return
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
@media (min-width: 0px) {  
.wizard_btn{
  --wizard_btn_size:45px;
}
    p {font-size:11px;
    display:none;
     margin-bottom:25px;} /*1rem = 16px*/
td::after{
    border-bottom: 10px solid lightgray;
    position: relative;
    content: "";
    top:3.7%;
    content: "";
    display: block;
    z-index: -1;
    height: 1px;
    width: 100%;
    top: -27px;
}
table{
  margin-bottom:10px;
}
}
@media (min-width: 345px) {  
.wizard_btn{
  --wizard_btn_size:45px;
}
    p {font-size:11px;
    display:initial;
     margin-bottom:25px;} /*1rem = 16px*/
td::after{
    border-bottom: 10px solid lightgray;
    position: relative;
    content: "";
    top:3.7%;
    content: "";
    display: block;
    z-index: -1;
    height: 1px;
    width: 100%;
    top: -54px;
}

}
/* Small devices (landscape phones, 544px and up) */
@media (min-width: 420px) {  

  .wizard_btn{
  --wizard_btn_size:55px;
}
    p {font-size:13px;
    display:initial;}

td::after{
    border-bottom: 10px solid lightgray;
    position: relative;
    content: "";
    top:3.7%;
    content: "";
    display: block;
    z-index: -1;
    height: 1px;
    width: 100%;
    top: -57px;
}

}

@media (min-width: 462px) {  
  .wizard_btn{
  --wizard_btn_size:60px;
}
    p {font-size:14px;
    display:block} /*1rem = 16px*/
td::after{
    border-bottom: 10px solid lightgray;
    position: relative;
    content: "";
    top:3.7%;
    content: "";
    display: block;
    z-index: -1;
    height: 1px;
    width: 100%;
    top: -70px;
}

}

.wizard{
      box-shadow:  0px 3px 5px rgba(136, 136, 136, 0.568);
      padding-top:10px;
      margin-bottom:20px;
}
p {
  margin-bottom:15px;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
table{
    table-layout: fixed;
    width:100%;
    max-width:1000px;
}
td{
        display: table-cell;
        position: relative;
        float: none;
        

        &:after {
            left: 50%;
        }
}

td.true::after {
    border-bottom: 10px solid var(--accent-color-1-darker);
    transition: 0.5s;
}

td:last-child::after {
width:0%;
}

.wizard_btn{
  width: var(--wizard_btn_size);
  height: var(--wizard_btn_size);
  border: 2px solid;
  border-radius: calc(var(--wizard_btn_size)/2);
  background-color: white;
  font-size: calc(var(--wizard_btn_size)/3);
  z-index: 2;
  transition: 0.5s
}

.wizard_active{
  border-color: var(--main-color);
  color: black;
}

.wizard_btn.wizard_active{
  background-color:var(--main-color-light);
}

.wizard_btn.wizard_unlocked:hover{
  background-color:var(--main-color-lightest);
}

.wizard_btn.wizard_completed:hover{
  background-color:var(--accent-color-1-lightest);
}

.wizard_disabled{

}

.wizard_unlocked{
  border-color: var(--main-color-lightest);
}

.wizard_completed{
  border-color: var(--accent-color-1-darker);
}


</style>