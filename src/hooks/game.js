import { reactive } from 'vue';

const game = reactive({
    active: false,
    change(value){ this.active = value },
});

const displayGame = reactive({
    active: false,
    change(value){ this.active = value },
});

export function getFlags(){
    return { game, displayGame }
}