<template>
    <b-container class="container_im">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
      <div class="container_wr">
        <div v-if=image class="imageCont">
          <img :src=image @click="onFileChange" alt="">
        </div>
        <div class="content">
          <div class="icon">
            <i class="fas fa-cloud-upload-alt"></i></div>
          <div class="text">
            No file chosen, yet!</div>
        </div>
        <div id="cancel-btn" @click="removeImage">
          <i class="fas fa-times"></i>
        </div>
        <div class="file-name">
          File name here</div>
      </div>
      <!-- your custom button or image or any thing else -->
      <b-row>
        <b-col>
          <button @click="browse" class="custom-btn">Selecciona</button>
        </b-col>
        <b-col>
          <button @click="removeImage" class="custom-btn">Eliminar</button>
        </b-col>
      </b-row>
      <input id="default-btn" type="file" @change="onFileChange" hidden>
    </b-container>
</template>

<script>
let regExp = /[0-9a-zA-Z^&'@{}[\],$=!\-#().%+~_ ]+$/;
export default {
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
        document.querySelector(".file-name").textContent = valueStore;
      }
      document.querySelector(".file-name").textContent = e.value();
    },
    createImage (file) {
      var reader = new FileReader()
      reader.name = file.name;
      var vm = this
      reader.onload = (e) => {
        vm.image = e.target.result
        document.querySelector(".container_wr").classList.add("active");
        document.querySelector(".file-name").textContent = reader.name;
      }
      reader.readAsDataURL(file)
    },
    removeImage: function () {
      this.image = ''
      document.querySelector(".container_wr").classList.remove("active");
    },
    browse () {
      document.querySelector("#default-btn").click()
    }
  }
}
</script>

<style>
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
.container_wr #cancel-btn i{
  position: absolute;
  font-size: 20px;
  right: 15px;
  top: 15px;
  color: #9658fe;
  cursor: pointer;
  display: none;
}
.container_wr.active:hover #cancel-btn i{
  display: block;
}
.container_wr #cancel-btn i:hover{
  color: #e74c3c;
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
</style>
