export default function ({ store, redirect }) {
    if (store.state.auth.user.role != "0") {
      return redirect('/account/login')
    }
  }