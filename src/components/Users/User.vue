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

export default {
    
    data() {
        return {
            data: [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
            ],

            columns: [
                {
                    field: 'id',
                    label: 'ID',
                    width: '40',
                    numeric: true
                },
                {
                    field: 'first_name',
                    label: 'First Name',
                },
                {
                    field: 'last_name',
                    label: 'Last Name',
                },
                {
                    field: 'date',
                    label: 'Date',
                    centered: true
                },
                {
                    field: 'gender',
                    label: 'Gender',
                }
            ]
        }
    },

    methods: {
        hdlSumit() {
            this.generatePDF()
        },
        generatePDF() {
            var doc = new jsPDF()

            for(var count = 0; count < this.data.length; count++) {
                doc.text(this.data[count].first_name, 10, 10 * count+1)
                
            } 
            doc.save('a4.pdf')
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
