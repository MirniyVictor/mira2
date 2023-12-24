console.log('ok');

const App = {
    data() {
        return {
            active: false,
            servers: []
        }
    },
    async mounted() {
        const res = await fetch('/api/servers');
        this.servers = await res.json();
    }
};

Vue.createApp(App).mount('#app');