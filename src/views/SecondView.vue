<template>
  <div id="firstPage">
    <div class="total d-flex justify-content-evenly align-items-center">
      <div class="cardImg">
        <img src="../assets/poyabzal2.jpg" alt="poyabzal" />
      </div>
      <div>
        <h3>Erkaklar krossovkalari</h3>
        <h4 class="fw-normal">
          <i class="fa-solid fa-circle-info"></i> Yetkazib berish: bepul, 1
          kunda
        </h4>
        <hr />
        <div>
          <h5 class="fw-normal pb-3">
            Rang: <b>{{ color }}</b>
          </h5>
          <div class="d-flex gap-3">
            <input
              type="radio"
              id="qora"
              value="Qora"
              v-model="color"
              class="d-none"
            />
            <label for="qora" class="box"></label>
            <input
              type="radio"
              id="jigarrang"
              value="Jigarrang"
              v-model="color"
              class="d-none"
            />
            <label for="jigarrang" class="box"></label>
            <input
              type="radio"
              id="oq"
              value="Oq"
              v-model="color"
              class="d-none"
            />
            <label for="oq" class="box"></label>
            <input
              type="radio"
              id="kulrang"
              value="Kulrang"
              v-model="color"
              class="d-none"
            />
            <label for="kulrang" class="box"></label>
          </div>
        </div>
        <hr />
          <h5 class="fw-normal pb-3">O'lcham: <b>{{ size.join(", ") }}</b></h5>
        <div class="d-flex gap-2">
          <input
            type="checkbox"
            id="38"
            value="38"
            v-model="size"
            class="d-none"
          />
          <label for="38" @click="label1" :class="active1 ? 'bg-passive' : 'bg-active'">38</label>
          <input
            type="checkbox"
            id="39"
            value="39"
            v-model="size"
            class="d-none"
          />
          <label for="39" @click="label2" :class="active2 ? 'bg-passive' : 'bg-active'">39</label>
          <input
            type="checkbox"
            id="40"
            value="40"
            v-model="size"
            class="d-none"
          />
          <label for="40" @click="label3" :class="active3 ? 'bg-passive' : 'bg-active'">40</label>
          <input
            type="checkbox"
            id="41"
            value="41"
            v-model="size"
            class="d-none"
          />
          <label for="41" @click="label4" :class="active4 ? 'bg-passive' : 'bg-active'">41</label>
          <input
            type="checkbox"
            id="42"
            value="42"
            v-model="size"
            class="d-none"
          />
          <label for="42" @click="label5" :class="active5 ? 'bg-passive' : 'bg-active'">42</label>
        </div>
        <hr />
        <div class="d-flex gap-4 mt-3">
          <div class="position-relative me-2">
            <button type="button" class="btn btn-secondary position-absolute">
              -
            </button>
            <button
              v-on:click="subs"
              v-if="count > 1"
              type="button"
              class="btn btn-primary position-absolute"
            >
              -
            </button>
          </div>
          <p class="ms-4 fs-4">
            {{ count }}
          </p>
          <div class="position-relative">
            <button type="button" class="btn btn-secondary position-absolute">
              +
            </button>
            <button
              v-on:click="add"
              v-if="count < 8"
              type="button"
              class="btn btn-primary position-absolute"
            >
              +
            </button>
          </div>
          <p class="ms-4 text-success fs-5">
            Sotuvda 8 dona bor
          </p>
        </div>
        <div class="d-flex gap-2">
          <h4>{{ 320 * count }} 000 so'm</h4>
          <s class="fs-5 text-secondary">400 000 so'm</s>
        </div>
        <hr>
        <div class="bg-light rounded py-3 px-2 fs-5">
          <span class="bg-warning rounded p-2 text-white">Oyiga 27 000 so'mdan</span> muddatli to'lov
        </div>
        <button type="button" class="btn btn-primary w-100 fs-5 mt-2">
          Tugmani bir bosishda xarid qilish
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
      color: "",
      size: [],
      active: false,
    };
  },
  methods: {
    label1() {
      this.active1 = !this.active1;
    },
    label2() {
      this.active2 = !this.active2;
    },
    label3() {
      this.active3 = !this.active3;
    },
    label4() {
      this.active4 = !this.active4;
    },
    label5() {
      this.active5 = !this.active5;
    },
    subs() {
      this.count -= 1;
    },
    add() {
      this.count += 1;
    },
  },
};
</script>
<style scoped>
.box {
    padding: 35px 28px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 12px;
    cursor: pointer;
    transition: .3s ease;
}

.box:hover {
    transform: translateY(-5px);
}

.box:nth-child(2) {
    background-color: #000;
} 

.box:nth-child(4) {
    background-color: brown;
} 

.box:last-child {
    background-color: #C9CDCF;
}

.bg-active,
.bg-passive {
  padding: 5px 8px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}

.bg-passive{
  background-color: limegreen;
}
.bg-active {
  background-color: gray;
}
</style>
