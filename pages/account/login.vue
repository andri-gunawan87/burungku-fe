<template>
    <div>
        <center>
            <img src="/assets/logoTop.svg" height="75px" width="85%" class="logo-top">
            <v-text-field
                label="Nomer Telepon"
                outlined
                dense
                width="90%"
                filled
                class="input"
            ></v-text-field>
            <v-text-field
                label="Kata Sandi"
                outlined
                dense
                width="90%"
                :type="'password'"
                filled
            ></v-text-field>
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/account/forgotPassword/ForgotPassword'"
            >
                <p style="text-align: right; font-weight: 700; font-size: 16px; line-height: 22px;">
                    Lupa Password?
                </p>
            </nuxt-link>
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/user/Discover'"
            >
                <button class="btn-dark">MASUK</button>
            </nuxt-link>
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/account/register/Account'"
            >
                <h5 class="daftar text-600">Daftar Akun</h5>
            </nuxt-link>
        </center>
    </div>
</template>