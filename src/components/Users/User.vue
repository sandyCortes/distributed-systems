<template>
    <section>
        <div class="card">
            <div class="card-content">
                <h5 class="title-card">Usuarios</h5>
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
                    field: 'idUser',
                    label: 'idUser',
                    width: '40',
                    numeric: true
                },
                {
                    field: 'userName',
                    label: 'Nombre',
                },
                {
                    field: 'surnames',
                    label: 'Apellidos',
                },
                {
                    field: 'date',
                    label: 'Date',
                    centered: true
                },
                {
                    field: 'email',
                    label: 'email',
                }
            ]
        }
    },

    mounted() {
        this.getUsers()
    },

    methods: {
        async getUsers() {
            const instance = axios.create({
                baseURL: 'http://localhost:3000',
                timeout: 1000,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT,DELETE',
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });

            var res = await instance.get('/users')
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

            for(var count = 1; count < this.data.length; count++) {
                doc.text(this.data[count].userName, 10, 10 * count + 2)
                doc.text(this.data[count].surnames, 50, 10 * count + 2)
                doc.text(this.data[count].email, 100, 10 * count + 2)
                
            } 
            doc.save('usuarios.pdf')
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
