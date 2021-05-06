<style scoped>
.footer {
  height: auto;
  line-height: 60px;
  background-color: var(--main-color);
  color: var(--main-color-darkest);
  display: block;
  text-align: center;
}

/* Small devices (landscape phones, 544px and up) */
@media (min-width: 300px) {  
    p {font-size:13px;} /*1rem = 16px*/
}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
    p {font-size:16px;} /*1rem = 16px*/
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    p {font-size:18px;} /*1rem = 16px*/
}



</style>

<template>
    <footer class ="navbar fixed-bottom footer">
        <div>
          <p>Preguntes freqüents | Contacte | Qui Som? | Termes i condicions</p>
        </div>
        
    </footer>
</template>

<script>
export default{
  components: {},
  name: 'CustomFooter'
}
</script>
