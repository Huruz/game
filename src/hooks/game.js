import { reactive } from 'vue';

const game = reactive({
    active: false,
    change(value){ this.active = value },
});

export default game