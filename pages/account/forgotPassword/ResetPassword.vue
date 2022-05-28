<template>
    <div class="background">
        <img src="/assets/back.svg" height="4%" width="4%" class="back">
        <h4 class="lupa">Reset Password</h4>
        <v-text-field
            label="Password Baru"
            prepend-inner-icon="mdi-key-outline"
            rounded
            filled
            class="lupa-input"
        ></v-text-field>
        <v-text-field
            label="Konfirmasi Password"
            prepend-inner-icon="mdi-key"
            rounded
            filled
            class="lupa-input"
        ></v-text-field>
        <nuxt-link
            style="text-decoration: none; color: inherit"
            :to="'/account/forgotPassword/ResetPasswordSuccess'"
        >
            <button class="btn-dark kirim">Reset</button>
        </nuxt-link>
    </div>
</template>