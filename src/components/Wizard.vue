<template>
  <div class="container">
    <div class = "row">

    <div v-for="step in steps" v-bind:key="step.id" :class = "'col ' + step.completed">
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
          icon: 'fas fa-pills',
          active: true,
          completed: false,
          unlocked: true
        },
        {
          name: 'Documents',
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
          name: 'Pagament',
          path: '/choosePaymentMethod',
          icon: 'fas fa-coins',
          active: false,
          completed: false,
          unlocked: false
        },
        {
          name: 'Resum comanda',
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
@media (min-width: 10px) {  
  .container{
  display:none;
}
    p {font-size:13px;
    display:none} /*1rem = 16px*/
}
/* Small devices (landscape phones, 544px and up) */
@media (min-width: 363px) {  
    .container{
  display:block;
}
  .wizard_btn{
  --wizard_btn_size:30px;
}
    p {font-size:13px;
    display:none} /*1rem = 16px*/
    .col::after{
      width:66%;
      right:-33%;
      top:45%;
    }
}

@media (min-width: 525px) {  
      .container{
  display:block;
}
  .wizard_btn{
  --wizard_btn_size:50px;
}
    p {font-size:14px;
    display:block} /*1rem = 16px*/
             .col::after{
    width:61%;
    right:-36%;
    top:25%;
    }
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
      .container{
  display:block;
}
.wizard_btn{
  --wizard_btn_size:60px;
}
    p {font-size:16px;
    display:block} /*1rem = 16px*/
         .col::after{
    width:60%;
    right:-35%;
    top:25%;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
      .container{
  display:block;
}
 .wizard_btn{
  --wizard_btn_size:60px;
}
 p {font-size:18px;
 display:block} /*1rem = 16px*/
     .col::after{
    width:67%;
    right:-35%;
    top:25%;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 1200px) { 
      .container{
  display:block;
}
  .wizard_btn{
  --wizard_btn_size:60px;
}
    p {font-size:18px;
    display:block} /*1rem = 16px*/
    .col::after{
    width:70%;
    right:-35%;
    top:25%;
    }
}

.wizard_btn{
  width: var(--wizard_btn_size);
  height: var(--wizard_btn_size);
  border-radius: calc(var(--wizard_btn_size)/2);
  background-color: white;
  font-size: calc(var(--wizard_btn_size)/3);


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
    position: absolute;
    content: "";
}
.col.true::after {
    border-bottom: 2px solid var(--accent-color-1-darker);
}
.col:last-child::after {
display:none;
}
</style>