<script setup>
import { ref, onMounted } from 'vue'

let ayatKursi = ref()
let asmaulHusna = ref()
let qunut = ref()
let qunutNazilah = ref()

onMounted(async () => {
    const resAyatKursi = await (await fetch('https://adityoarr-expressjs-api.vercel.app/ayat-kursi')).json();
    ayatKursi.value = resAyatKursi;

    const resAsmaulHusna = await (await fetch('https://adityoarr-expressjs-api.vercel.app/asmaul-husna')).json();
    asmaulHusna.value = resAsmaulHusna;

    const resQunut = await (await fetch('https://adityoarr-expressjs-api.vercel.app/qunut')).json();
    qunut.value = resQunut;

    const resQunutNazilah = await (await fetch('https://adityoarr-expressjs-api.vercel.app/qunut-nazilah')).json();
    qunutNazilah.value = resQunutNazilah;
});
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Islam</h5>
                <Accordion>
                    <AccordionTab header="Ayat Kursi">
                        <p class="line-height-3 m-0">
                            API : <b><i>https://adityoarr-expressjs-api.vercel.app/ayat-kursi</i></b>
                            <br />
                            Result Sample :
                        </p>
                        <div class="card" style="background-color: black; color: white;">
                            <span>{{ ayatKursi }}</span>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Asmaul Husna">
                        <p class="line-height-3 m-0">
                            API : <b><i>https://adityoarr-expressjs-api.vercel.app/asmaul-husna</i></b>
                            <br />
                            Result Sample :
                        </p>
                        <div class="card" style="background-color: black; color: white;">
                            <span>{{ asmaulHusna }}</span>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Qunut">
                        <p class="line-height-3 m-0">
                            API : <b><i>https://adityoarr-expressjs-api.vercel.app/qunut</i></b>
                            <br />
                            Result Sample :
                        </p>
                        <div class="card" style="background-color: black; color: white;">
                            <span>{{ qunut }}</span>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Qunut Nazilah">
                        <p class="line-height-3 m-0">
                            API : <b><i>https://adityoarr-expressjs-api.vercel.app/qunut-nazilah</i></b>
                            <br />
                            Result Sample :
                        </p>
                        <div class="card" style="background-color: black; color: white;">
                            <span>{{ qunutNazilah }}</span>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>
</template>
