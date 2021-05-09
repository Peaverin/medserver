<template>
  <b-container class="container_im">
    <div ref="container_wr" class="container_wr">
      <div v-if=image class="imageCont">
        <img v-bind:src=image @click="onFileChange" alt="">
      </div>
      <div class="content">
        <div class="icon">
          <i class="fas fa-cloud-upload-alt"></i></div>
        <div class="text">
          Encara no s'ha escollit cap fitxer!</div>
      </div>
      <div ref=filename class="file-name">
        File name here</div>
    </div>
    <!-- your custom button or image or any thing else -->
    <b-row class="row-buttons">
      <b-col>
        <button @click="browse" class="ctrbtn">Selecciona</button>
      </b-col>
      <b-col>
        <button @click="removeImage" class="ctrbtn" id="calltodelete">Eliminar</button>
      </b-col>
    </b-row>
    <input id="default-btn" type="file" ref="hiddenBtn" @change="onFileChange" hidden>
  </b-container>
</template>

<script>
let regExp = /[0-9a-zA-Z^&'@{}[\],$=!\-#().%+~_ ]+$/;
export default {
  name: "el",
  data() {
    return {
      image: ""
    }
  },
  methods:{
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
      if(this.value){
        let valueStore = this.files[0].value().match(regExp);
        this.$refs.filename.textContent = valueStore;
      }
      this.$refs.filename.textContent = e.value();
    },
    createImage (file) {
      var reader = new FileReader()
      reader.name = file.name;
      var vm = this
      reader.onload = (e) => {
        vm.image = e.target.result
        this.$refs.container_wr.classList.add("active");
        this.$refs.filename.textContent = reader.name;
      }
      reader.readAsDataURL(file)
    },
    removeImage: function () {
      this.image = ''
      this.$refs.container_wr.classList.remove("active");
    },
    browse () {
      this.$refs.hiddenBtn.click()
    }
  }
}
</script>

<style scoped>
.container_im{
  width: 100%;
  min-width: 430px;
  padding-left: 15px;
  padding-right: 15px;
}
.container_im .container_wr{
  position: relative;
  height: 300px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  border: 2px dashed #c2cdda;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.container_wr.active{
  border: none;
}
.container_wr .imageCont{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container_wr img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.container_wr .icon{
  font-size: 100px;
  color: #9658fe;
}
.container_wr .text{
  font-size: 20px;
  font-weight: 500;
  color: #5B5B7B;
}
.container_wr .file-name{
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 8px 0;
  font-size: 18px;
  color: #fff;
  display: none;
  background: linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);
}
.container_wr.active:hover .file-name{
  display: block;
}
.container_im .custom-btn{
  margin-top: 30px;
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);
}

.row-buttons {
  margin-top: 15px;
}

</style>
