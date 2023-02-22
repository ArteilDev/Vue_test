<template>
    <div class="section">
        <div class="tpa-list row row-cols-md-2 row-cols-xl-3">
            <div class="col">
                <div class="card card__all-tpa-info shadow-1">
                    <div class="card__all-tpa-info_line" style="background-color: #11A1FD;"></div>
                    <div class="d-flex flex-column">
                        <span class="card__all-tpa-info_title">Всего</span>
                        <span v-if="!isLoading" class="card__all-tpa-info_subtitle h2" style="color: #11A1FD;">{{ total }}</span>
                        <span v-else>
                            <PuSkeleton class="card__all-tpa-info_subtitle h2"></PuSkeleton>
                        </span>
                    </div>
                    <i class="icon-chart card__all-tpa-info_icon h2" style="color: #11A1FD;"></i>
                </div>
            </div>
            <div class="col">
                <div class="card card__all-tpa-info shadow-1">
                    <div class="card__all-tpa-info_line" style="background-color: #07C180;"></div>
                    <div class="d-flex flex-column">
                        <span class="card__all-tpa-info_title">В работе</span>
                        <span v-if="!isLoading" class="card__all-tpa-info_subtitle h2" style="color: #07C180;">{{ total-downtime }}</span>
                        <span v-else>
                            <PuSkeleton class="card__all-tpa-info_subtitle h2"></PuSkeleton>
                        </span>
                    </div>
                    <i class="card__all-tpa-info_subtitle icon-check h2" style="color: #07C180;"></i>
                </div>
            </div>
            <div class="col">
                <div class="card card__all-tpa-info shadow-1">
                    <div class="card__all-tpa-info_line" style="background-color: #F42B3D;"></div>
                    <div class="d-flex flex-column">
                        <span class="card__all-tpa-info_title">В простое</span>
                        <span v-if="!isLoading" class="card__all-tpa-info_subtitle h2" style="color: #F42B3D;">{{ downtime }}</span>
                        <span v-else>
                            <pu-skeleton class="card__all-tpa-info_subtitle h2"></pu-skeleton>
                        </span>
                    </div>
                    <i class="card__all-tpa-info_subtitle icon-warning h2" style="color: #F42B3D;"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapState ({
                total: state => state.total,
				downtime: state => state.downtime,
                isLoading: state => state.isLoading
            }),
            ...mapGetters ({
				completeData: 'completeData'
			})
        }
    }
</script>