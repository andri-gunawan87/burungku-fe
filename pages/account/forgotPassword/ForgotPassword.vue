<template>
    <div class="background">
        <img src="/assets/back.svg" height="4%" width="4%" class="back">
        <h4 class="lupa">Lupa Passwordmu?</h4>
        <p class="text-forgot">Silahkan masukkan nomor telepon anda, untuk menerima kode verifikasi</p>
        <v-text-field
            label="Nomer Telepon"
            prepend-inner-icon="mdi-phone-outline"
            rounded
            filled
            class="lupa-input"
        ></v-text-field>
        <button class="btn-dark kirim">Kirim</button>
    </div>
</template>
