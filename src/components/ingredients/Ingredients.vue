<template>
    <section>
        <div class="card">
            <div class="card-content">
                <h5 class="title-card">Ingredientes</h5>
                <hr />
                <b-table :data="data" :columns="columns"></b-table>
                <b-button @click="hdlSumit" type="is-dark">Generar PDF</b-button>
            </div>
        </div>
    </section>
</template>

<script>
import * as jsPDF from 'jspdf'
import axios from 'axios'

export default {
    
    data() {
        return {
            data: [],

            columns: [
                {
                    field: 'idIngredients',
                    label: 'ID',
                    width: '40',
                    numeric: true
                },
                {
                    field: 'descriptionI',
                    label: 'Descripción',
                },
                {
                    field: 'costI',
                    label: 'Costo',
                }
            ]
        }
    },

    mounted() {
        this.getIngredient()
    },

    methods: {
        async getIngredient() {
            const instance = axios.create({
                baseURL: 'http://localhost:3000',
                timeout: 1000,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT,DELETE',
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });

            var res = await instance.get('/ingredient')
                .then(response => {
                    return response
                })
                .catch(err => {
                    console.log(err)
                })
            this.data = res.data
        },
        hdlSumit() {
            this.generatePDF()
        },
        generatePDF() {
            var doc = new jsPDF()
            
            for(var count = 0; count < this.data.length; count++) {
                doc.text(String(this.data[count].idIngredients), 10, 10 * count + 2)
                doc.text(String(this.data[count].descriptionI), 50, 10 * count + 2)
                doc.text('$ ' + String(this.data[count].costI), 100, 10 * count + 2)
            } 
            doc.save('ingredientes.pdf')
        },
        loadImage(url) {
            return new Promise((resolve) => {
                let img = new Image();
                img.onload = () => resolve(img);
                img.src = url;
            })
        }
    }

}

</script>

<style scoped>
.title-card {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #db2722;
}
</style>
