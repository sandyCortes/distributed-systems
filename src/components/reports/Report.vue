<template>
    <section>
        <div class="card">
            <div class="card-content">
                <h5 class="title-card">Reportes</h5>
                <hr />
                <b-button @click="hdlSumit" type="is-dark">Generar PDF</b-button>
            </div>
        </div>
    </section>
</template>

<script>
import * as jsPDF from 'jspdf'

export default {
    

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
