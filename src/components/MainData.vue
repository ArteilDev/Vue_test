<template>
    <div class="list-container">
        <div class="list-container__header row row-cols-6">
            <span>Наименование ТПА</span>
            <span>Тех. состояние ЕАМ</span>
            <span>Тех. состояние терминала</span>
            <span>Текущая пресс-форма</span>
            <span>Продукта за смену</span>
            <span>План</span>
        </div>
        <div v-if="!isLoading">
            <div v-for="d in data" :key="d.sync_id" class="list-container__item">
                <div v-if="d.EamState === 'В простое' && d.MesState === 'В простое'" class="info row row-cols-6 m-0">
                    <span class="col">{{ d.Name }}</span>
                    <span class="col">{{ d.EamState }}</span>
                    <span class="col">{{ d.MesState }}</span>
                    <span class="col">{{ d.PressForm }}</span>
                    <span class="col">{{ d.fact }}</span>
                    <span class="col">{{ d.plan }}</span>
                </div>
                <div v-else-if="d.EamState === 'В работе' && d.MesState === 'В работе'" class="success row row-cols-6 m-0">
                    <span class="col">{{ d.Name }}</span>
                    <span class="col">{{ d.EamState }}</span>
                    <span class="col">{{ d.MesState }}</span>
                    <span class="col">{{ d.PressForm }}</span>
                    <span class="col">{{ d.fact }}</span>
                    <span class="col">{{ d.plan }}</span>
                </div>
                <div v-else-if="d.EamState === 'В простое' || d.MesState === 'В работе'" class="row row-cols-6 m-0">
                    <span class="danger col">{{ d.Name }}</span>
                    <span class="danger col">{{ d.EamState }}</span>
                    <span class="success col">{{ d.MesState }}</span>
                    <span class="success col">{{ d.PressForm }}</span>
                    <span class="success col">{{ d.fact }}</span>
                    <span class="success col">{{ d.plan }}</span>
                </div>
                <div v-else="d.EamState === 'В работе' || d.MesState=== 'В простое'" class="row row-cols-6 m-0">
                    <span class="success col">{{ d.Name }}</span>
                    <span class="success col">{{ d.EamState }}</span>
                    <span class="danger col">{{ d.MesState }}</span>
                    <span class="danger col">{{ d.PressForm }}</span>
                    <span class="danger col">{{ d.fact }}</span>
                    <span class="danger col">{{ d.plan }}</span>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-for="n in 10" class="list-container__item">
                <div class="row row-cols-6 m-0">
                    <pu-skeleton class="col loading"></pu-skeleton>
                    <pu-skeleton class="col loading"></pu-skeleton>
                    <pu-skeleton class="col loading"></pu-skeleton>
                    <pu-skeleton class="col loading"></pu-skeleton>
                    <pu-skeleton class="col loading"></pu-skeleton>
                    <pu-skeleton class="col loading"></pu-skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        props: {
            data: {
                type: Array,
                required: true
            }
        },

        computed: {
            ...mapState ({
                isLoading: state => state.isLoading
            }),
        }
    }
</script>