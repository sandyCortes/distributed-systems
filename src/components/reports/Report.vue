<template>
  <section>
    <div class="card">
      <div class="card-content">
        <h5 class="title-card">Reportes</h5>
        <hr />

        <b-field label="Fecha inicial">
            <b-input placeholder="2020-02-19"></b-input>
        </b-field>
        <b-field label="Fecha final">
            <b-input placeholder="2020-07-19"></b-input>
        </b-field>
        <br /><br />
        <div v-show="data.length > 0">
            <CharAt :sections="array" />
        </div>

        <b-button @click="hdlSumit" type="is-dark">Generar PDF</b-button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import CharAt from "./../../ui/ChartAt";
import * as jsPDF from "jspdf";

export default {
  data() {
    return {
      inputDate1: '',
      inputDate2: '',
      data: [],
      array: [
        {
          title: "Reporte",
          section: [ {label: '', money: 0, color: ''}]
        }
      ]
    };
  },

  methods: {
    async getReport() {
        const instance = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 1000,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT,DELETE',
                'Content-Type': 'application/json;charset=utf-8'
            }
        })

        var res = await instance.get('/report')
            .then(response => {
                return response
            })
            .catch(err => {
                console.log(err)
            })
            this.data = res.data
            this.array.section[0].label = this.data[0].label = 'Reporte'
            this.array.section[0].money = this.data[0].saleTotal
            this.array.section[0].color = this.data[0].color = "#98d354"
    },
    getPercent() {
      var size = 0;
      var money = 0;
      var newValue = 0;
      for (var count = 0; count < this.array.length; count++) {
        size = this.array[count].section.length;
        money = parseInt(this.array[count].money);
        for (var array = 0; array < size; array++) {
          newValue = parseInt(this.array[count].section[array].money);
          this.array[count].section[array].value = this.percent(
            money,
            newValue
          );
        }
      }
      console.log(this.array);
    },
    percent(total, amount) {
      return (amount * 100) / total;
    },
    hdlSumit() {
        this.getReport()
      this.generatePDF();
    },
    generatePDF() {
      var doc = new jsPDF();

      for (var count = 0; count < this.data.length; count++) {
        doc.text(String(this.data[count].idOrder), 10, 10 * count + 2)
        doc.text(String(this.data[count].descriptionW), 50, 10 * count + 2)
        doc.text(String(this.data[count].saleDate), 100, 10 * count + 2)
        doc.text('$' + String(this.data[count].saleTotal), 150, 10 * count + 2)
      }
      doc.save("Reporte.pdf");
    },
    loadImage(url) {
      return new Promise(resolve => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
      });
    }
  },

  components: {
    CharAt
  }
};
</script>

<style scoped>
.title-card {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #db2722;
}
</style>
