<template>
    <div class="background">
        <img src="/assets/back.svg" height="4%" width="4%" class="back">
        <h4 class="lupa">Kode Verifikasi</h4>
        <p class="text-forgot">Masukkan 4-digit kode verifikasi yang dikirim ke nomor anda</p>
        <v-otp-input
            light
            length="5"
        ></v-otp-input>
            <v-btn 
                block :disabled="!isActive"
                class="btn-dark" 
                @click="popup()">
                Verifikasi</v-btn>

        <v-dialog v-model="dialogverifikasi" :persistent="status" max-width="30%">
            <v-card>
                <center>
                    <h3 class="text-500">Verifikasi Sukses</h3>
                    <img src="/assets/success1.svg" height="20%" width="20%" class="logo-success">
                    <h6 class="text-500">Silakan reset password anda</h6>
                    <button class="btn-dark btn-dialog" @click="dialogverifikasi = false">Ok</button>
                </center>
          </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        data: () =>({
            dialogverifikasi: false,
            status: false,
        }),

        methods: {
            popup() {
                this.dialogverifikasi = true;
            }
        }
    }
</script>