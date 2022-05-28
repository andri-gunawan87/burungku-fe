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
            ></v-text-field>
            <v-text-field
                label="Kata Sandi"
                outlined
                dense
                width="90%"
                :type="'password'"
                filled
                append-icon="Lupa?"
            ></v-text-field>
            <button class="btn-dark">MASUK</button>
            <h5 class="daftar">Daftar Akun</h5>
        </center>
    </div>
</template>