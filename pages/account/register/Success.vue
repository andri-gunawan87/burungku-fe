<template>
    <div>
        <center>
            <img src="/assets/logoTop.svg" height="75px" width="85%" class="logo-top">
            <h5 class="text-otp">Akun Anda Terverifikasi</h5>
            <img src="/assets/success.svg" height="50%" width="50%" class="logo-success">
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/account/LoginV2'"
            >
                <button class="btn-dark">MASUK</button>
            </nuxt-link>
        </center>
    </div>
</template>