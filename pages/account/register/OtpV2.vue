<template>
    <div>
        <center>
            <img src="/assets/logoTop.svg" height="75px" width="85%" class="logo-top">
            <h5 class="text">Masukkan Kode OTP</h5>
            <v-otp-input
                light
                length="5"
            ></v-otp-input>
            <v-btn block :disabled="!isActive" class="btn-dark">Verifikasi</v-btn>
        </center>
    </div>
</template>