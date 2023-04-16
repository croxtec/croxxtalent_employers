<template>
    <div class="spacer">
        <div class="jobs--cards">
      <div class="training--card" v-for="item in 8" :key="item">
        <div class="top d-flex justify-content-between align-items-center">
         <img src="https://getwallpapers.com/wallpaper/full/0/1/1/552509.jpg" alt="">
        </div>
        <div class="middle mt-2 text-center">
          <h6 class=" mb-1" style="color:var(--primary-500)">Chinedu Macauley</h6>
          <h6 class="font-weight-bolder" style="font-size:15px">Drilling Engineer</h6>
         
  
          <div class="mt-3 d-flex align-items-center flex-wrap justify-content-center" style="gap: 8px">
            <span class="outline-tag a">Surface cementing</span>
            <span class="outline-tag d">Coring</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["trainingCount"],
    components: {
    },
  };
  </script>
  
  <style>
  .training--card .top img {
    width: 100%;
    height: 200px;
    object-position: center;
    -o-object-position: center;
    object-fit: cover;
    -o-object-fit: cover;
    border-radius: 10px 10px 0 0;

  }

.training--card .middle {
    border: 1px solid var(--primary-300);
    background: #fff;
    padding: 15px;
    border-radius:  0 0 15px 15px;
}


.jobs--cards {
    display: grid;
    display: -ms-inline-grid;
    display: -moz-grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
</style>