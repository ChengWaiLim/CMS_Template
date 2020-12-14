import { Request } from "vue_basecomponent";
export default async function({ store, redirect, route }) {
    try {
        if (store.getters.token == "" || store.state.user == null)
            return redirect("/login");
        else {
            var userType = store.getters.userType;
            var result = await Request.getAsync(
                null,
                "get_UserAuth_all", {}, { showLoading: false }
            );
            store.state.userAuth = result.data.UserAuth;
            if (!checkRolePermission(route, userType, result.data.UserAuth))
                return redirect("/error");
        }
    } catch (exception) {
        console.log(exception);
        redirect("/error");
    }
}

function checkRolePermission(route, userType, userRight) {
    try {
        return (
            userRight
            .find(f => f.page == route.path || f.page + "/" == route.path)
            .readAuth.find(f => userType.indexOf(f) != -1) != null
        );
    } catch (e) {
        console.log(e);
        return false;
    }
}