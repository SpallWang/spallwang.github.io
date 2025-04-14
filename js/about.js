let app = Vue.createApp({
    data() {
        return {
            topbar: "",
            state: {
                done: false
            },
        }
    },
    created() {
        let vm = this;
        vm.state.done = true;
    },
    methods: {
    }
});

// app.component('sidebar-component', sidebarComponent);
// app.component('topbar-component', topbarComponent);
// app.component('logout-modal-component', logoutModalComponent);
app = app.mount('#wrapper');

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function waitLoop() {
    for(;;) {
        await sleep(150);
        if(app.$data.state.done == true) {
            wbmain();
            break;
        }
    }
}

$(document).ready(function() {
    waitLoop();
});