<template>
  <section>
    <no-ssr>
      <div class="donut-content">
        <div class="margin-donut" v-for="item in sections" v-bind:key="item.title">
          <vc-donut :size="150" unit="px" :thickness="10" :sections="item.section" :total="100">
            <h1>
              <p class="title-chart">{{ item.title }}</p>
              {{ item.money }}€
            </h1>
          </vc-donut>

          <div class="text-percent">
            <div class="margin-index" v-for="(titles, index) in item.section" v-bind:key="index">
              <div class="center-content">
                <p class="title-text" v-bind:style="{ color: titles.color }">{{ titles.label }}</p>
                <p class="percent-content">
                  {{ titles.value }}%
                  <span>{{ titles.money }}€</span>
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </no-ssr>
  </section>
</template>

<script>
import Donut from "vue-css-donut-chart";
import Vue from "vue";
import "vue-css-donut-chart/dist/vcdonut.css";

Vue.use(Donut);

export default {
  props: {
    sections: {
      type: Array,
      requikred: true
    }
  }
};
</script>

<style scoped>
.margin-donut {
  margin-right: 50px;
}
.margin-index {
  margin: 0 10px 0 10px;
}
.donut-content {
  display: flex;
  margin: auto;
}
.donut-content .text-percent {
  margin-top: 10px;
  display: flex;
}
.donut-content .text-percent div .center-content {
  display: block;
  margin: auto;
}
.donut-content .text-percent div .title-text {
  font-weight: bold;
  font-size: 14px;
}
.donut-content .text-percent div .percent-content {
  font-size: 12px;
  font-weight: bold;
}
.donut-content .text-percent div .percent-content span {
  color: gray;
}
</style>
