<template>
    <div>
        <center>
            <img src="/assets/logoTop.svg" height="75px" width="85%" class="logo-top">
            <h5 class="text text-600">Masukkan Kode OTP</h5>
            <v-otp-input
                light
                length="5"
            ></v-otp-input>
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/account/register/Success'"
            >
                <v-btn block :disabled="!isActive" class="btn-dark">Verifikasi</v-btn>
            </nuxt-link>
        </center>
    </div>
</template>