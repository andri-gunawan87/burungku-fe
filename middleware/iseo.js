export default function ({ store, redirect }) {
    if (!store.state.auth.loggedIn) {
      return redirect('/account/login')
    } else if (store.state.auth.user.role != "1")
    {
      return redirect('/account/login')
    }
  }