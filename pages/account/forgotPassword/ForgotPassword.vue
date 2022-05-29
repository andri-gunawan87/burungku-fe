<template>
    <div class="background">
        <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/account/LoginV2'"
            >
        <img src="/assets/back.svg" height="4%" width="4%" class="back">
        </nuxt-link>
        <h4 class="lupa text-500">Lupa Passwordmu?</h4>
        <p class="text-forgot text-400">Silahkan masukkan nomor telepon anda, untuk menerima kode verifikasi</p>
        <v-text-field
            placeholder="Nomer Telepon"
            prepend-inner-icon="mdi-phone-outline"
            rounded
            filled
            class="lupa-input"
        ></v-text-field>
        <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/account/forgotPassword/Verify'"
            >
            <button class="btn-dark kirim">Kirim</button>
        </nuxt-link>
    </div>
</template>
