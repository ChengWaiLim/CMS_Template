export default function({ store, redirect }) {
    if (store.getters.token != "" && store.state.user != null) {
        return redirect("/Master/Location");
    }
}