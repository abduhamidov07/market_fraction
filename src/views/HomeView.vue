<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <RouterLink class="col" to="/first">
        <div class="card">
          <div class="card-img">
            <img src="../assets/poyabzal1.jpg" alt="poyabzal1" />
          </div>
          <div class="card-body">
            <h4 class="card-title">Krossovka</h4>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <hr />
            <div class="d-flex gap-2">
              <h4>240 000 so'm</h4>
              <s class="fs-5 text-secondary">320 000 so'm</s>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink class="col" to="/second">
        <div class="card">
          <div class="card-img">
            <img src="../assets/poyabzal2.jpg" alt="poyabzal1" />
          </div>
          <div class="card-body">
            <h4 class="card-title">Krossovka</h4>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <hr />
            <div class="d-flex gap-2">
              <h4>320 000 so'm</h4>
              <s class="fs-5 text-secondary">400 000 so'm</s>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink class="col" to="/third">
        <div class="card">
          <div class="card-img">
            <img src="../assets/poyabzal3.jpg" alt="poyabzal1" />
          </div>
          <div class="card-body">
            <h4 class="card-title">Krossovka</h4>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <hr />
            <div class="d-flex gap-2">
              <h4>280 000 so'm</h4>
              <s class="fs-5 text-secondary">370 000 so'm</s>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink class="col" to="/fourth">
        <div class="card">
          <div class="card-img">
            <img src="../assets/poyabzal4.jpg" alt="poyabzal1" />
          </div>
          <div class="card-body">
            <h4 class="card-title">Krossovka</h4>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <hr />
            <div class="d-flex gap-2">
              <h4>250 000 so'm</h4>
              <s class="fs-5 text-secondary">360 000 so'm</s>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.col {
  text-decoration: none;
  color: #010101;
}
img {
  width: 100%;
}
</style>
