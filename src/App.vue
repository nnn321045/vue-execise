<script>
import { ref } from 'vue';
import { useFileUpdate } from "./composition-api/useFileUpdate.js";

export default {
  setup(){
    const {setFile , previewMap} = useFileUpdate();

    // input DOM
    const inputDOM = ref(null);
    
    const fileChange = (e) =>{
      console.log(e.target.files);
      setFile(e.target.files)
    };
    const uploadImg = () =>{
      inputDOM.value.click();
    };

    return{
      inputDOM,
      fileChange,
      uploadImg,
      previewMap
    }
  }
}
</script>

<template>
  <div>
    <input ref="inputDOM" type="file" class="upload" name="imgUpload" multiple="multiple" @change="fileChange"/>
    <button @click="uploadImg">上傳照片</button>
  </div>

  <div v-show="Object.values(previewMap).length !== 0" class="img_box" v-for="item in previewMap" :key="item">
    <img :src="item" alt="">
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.upload{
  position: fixed;
  top: -500px;
  left: -500px;
  z-index: -100;
  opacity: 0;
}

.img_box{
  display: inline-block;
}

.img_box > img{
  width: 250px;
  height: 250px;
}

</style>
