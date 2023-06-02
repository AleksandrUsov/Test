<template>
    <div class="container">
        <div class="advantages-block-content">
            <advantagesCard
                v-for="(card, index) in cards"
                :key="index"
                :card="card"
            />
        </div>
    </div>
</template>

<script>
import advantagesCard from "@/components/advantages/advantagesCard";

export default {
    name: "advantagesBlock",
    data () {
        return {
            cards: [
                {desc: 'Меню можно заказать в любое время после бронирования вояжа, уже когда вы посоветуетесь со всеми гостями', blue: false},
                {desc: 'У некоторых ресторанов есть минимальный заказ. Меньше чем на указанную сумму заказать нельзя. Если вы заказываете еду из разных мест, то порог минимального заказа нужно превысить для каждого.', blue: true},
                {desc: 'За доставку вашего заказа отвечаем мы. Прямо на лодку заказ доставит курьер, а мы заберём. Будет ждать вас на борту.', blue: false},
                {desc: 'В случае отмены вояжа за 24 часа - можно отменить и заказ на еду. Деньги вернутся вам на ту карту, с которой платили.', blue: true},
                {desc: 'Меню можно заказать в любое время после бронирования вояжа, уже когда вы посоветуетесь со всеми гостями', blue: false},
                {desc: 'В случае отмены вояжа за 24 часа - можно отменить и заказ на еду. Деньги вернутся вам на ту карту, с которой платили.', blue: true}
            ]
        }
    },
    components: {
        advantagesCard
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/global";

.advantages-block-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: $containerOnDesktop;
}
</style>
