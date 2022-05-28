<template>
    <div class="background">
        <center>
            <h5 class="text-otp">Reset Password Berhasil</h5>
            <img src="/assets/success1.svg" height="50%" width="50%" class="logo-success">
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/user'"
            >
                <button class="btn-dark kirim">Login</button>
            </nuxt-link>
        </center>
    </div>
</template>