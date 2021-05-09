<style scoped>
.footer {
  height: 55px;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: var(--main-color);
  color: var(--main-color-darkest);
}
p{
  margin-top:10px;
}

@media (min-width: 100px) {  
    p {font-size:10px;} /*1rem = 16px*/
}

/* Small devices (landscape phones, 544px and up) */
@media (min-width: 423px) {  
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
    <footer class ="footer">

          <p>Preguntes freqüents | Contacte | Qui Som? | Termes i condicions</p>
        
    </footer>
</template>

<script>
export default{
  components: {},
  name: 'CustomFooter'
}
</script>
