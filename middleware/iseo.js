export default function ({ store, redirect }) {
    if (store.state.auth.user.role != "1") {
      return redirect('/account/login')
    }
  }