<template>
    <div>
        <center>
            <img src="/assets/logoTop.svg" height="75px" width="85%" class="logo-top">
            <h5 class="text-600 text">Akun Anda Terverifikasi</h5>
            <img src="/assets/success.svg" height="50%" width="50%" class="logo-success">
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/account/login'"
            >
                <button class="btn-dark">MASUK</button>
            </nuxt-link>
        </center>
    </div>
</template>