<template>
    <div class="content">
		<div class="page">
            <h1 class="page_title">Информация о ТПА</h1>
            <div class="tpa-list row row-cols-md-3 row-cols-xl-4">
                <div class="col">
                    <div class="card card-tpa-header shadow-1">
                        <div class="card__all-tpa-info_line" style="background-color: #223345;"></div>
                        <div class="d-flex flex-column">
                            <span class="card-tpa-header_subtitle" style="color: #223345;"> {{ $route.params.name }}</span>
                        </div>
                        <i class="icon-gears card-tpa-header_icon h2" style="color: #223345;"></i>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-tpa-header shadow-1">
                        <div class="card__all-tpa-info_line" style="background-color: #07C180;"></div>
                        <div class="d-flex flex-column">
                            <span class="card-tpa-header_title">Состояние в ЕАМ</span>
                            <span class="card-tpa-header_subtitle" style="color: #07C180;">В работе</span>
                        </div>
                        <i class="card-tpa-header_icon icon-check h2" style="color: #07C180;"></i>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-tpa-header shadow-1">
                        <div class="card__all-tpa-info_line" style="background-color: #07C180;"></div>
                        <div class="d-flex flex-column">
                            <span class="card-tpa-header_title">Состояние терминала</span>
                            <span class="card-tpa-header_subtitle" style="color: #07C180;">В работе</span>
                        </div>
                        <i class="card-tpa-header_icon icon-check h2" style="color: #07C180;"></i>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-tpa-header shadow-1">
                        <div class="card__all-tpa-info_line" style="background-color: #11A1FD;"></div>
                        <div class="d-flex flex-column">
                            <span class="card-tpa-header_title">До конца плана</span>
                            <span class="card-tpa-header_subtitle" style="color: #11A1FD;">08:32:04</span>
                        </div>
                        <i class="card-tpa-header_icon icon-time h2" style="color: #11A1FD;"></i>
                    </div>
                </div>
            </div>
            <div class="grid-tpa_wide">
                <div class="chart-container shadow-1">
                    <canvas class="myChart1" id="myChart1" width="100%"></canvas>
                </div>
                <div class="card-current-tpa card-current-tpa__data">
                    <div class="card-current-tpa__data_title">Пресс-форма</div>
                    <div class="card-current-tpa__data_subtitle">Мусорный бак 1100л</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data">
                    <div class="card-current-tpa__data_title">Продукт</div>
                    <div class="card-current-tpa__data_subtitle">Мусорный бак 20.800.60.PE</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_prodCount">
                    <div class="card-current-tpa__data_title">План по прод.</div>
                    <div class="card-current-tpa__data_subtitle" style="color: #11A1FD;">225</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_prodCount">
                    <div class="card-current-tpa__data_title">Выпущено прод.</div>
                    <div class="card-current-tpa__data_subtitle" style="color: #07C180;">225</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_count">
                    <div class="card-current-tpa__data_title">Плановый цикл</div>
                    <div class="card-current-tpa__data_subtitle">194</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_count">
                    <div class="card-current-tpa__data_title">Цикл за смену</div>
                    <div class="card-current-tpa__data_subtitle">194</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_count">
                    <div class="card-current-tpa__data_title">Плановый вес</div>
                    <div class="card-current-tpa__data_subtitle">194</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_count">
                    <div class="card-current-tpa__data_title">Средний вес</div>
                    <div class="card-current-tpa__data_subtitle">194</div>
                </div>
            </div>
            <div class="grid-tpa_small">
                <div class="chart-container shadow-1">
                    <canvas id="myChart2" width="100%"></canvas>
                </div>
                <div class="card-current-tpa card-current-tpa__data">
                    <div class="card-current-tpa__data_title">Пресс-форма</div>
                    <div class="card-current-tpa__data_subtitle">Мусорный бак 1100л</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data">
                    <div class="card-current-tpa__data_title">Продукт</div>
                    <div class="card-current-tpa__data_subtitle">Мусорный бак 20.800.60.PE</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_prodCount">
                    <div class="card-current-tpa__data_title">План по прод.</div>
                    <div class="card-current-tpa__data_subtitle" style="color: #11A1FD;">225</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_prodCount">
                    <div class="card-current-tpa__data_title">Выпущено прод.</div>
                    <div class="card-current-tpa__data_subtitle" style="color: #07C180;">225</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_count">
                    <div class="card-current-tpa__data_title">Плановый цикл</div>
                    <div class="card-current-tpa__data_subtitle">194</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_count">
                    <div class="card-current-tpa__data_title">Цикл за смену</div>
                    <div class="card-current-tpa__data_subtitle">194</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_count">
                    <div class="card-current-tpa__data_title">Плановый вес</div>
                    <div class="card-current-tpa__data_subtitle">194</div>
                </div>
                <div class="card-current-tpa card-current-tpa__data card-current-tpa__data_count">
                    <div class="card-current-tpa__data_title">Средний вес</div>
                    <div class="card-current-tpa__data_subtitle">194</div>
                </div>
            </div>
            <div class="row row-cols-xl-2 row-cols-xxl-4">
                <div class="col mb-3">
                    <div class="section section-list-container">
                        <div class="section-list-container__header">
                            <h2 class="h6">Введенный вес</h2>
                            <span class="badge badge_primary h6 d-flex align-content-center">
                                <span class="me-2">4</span>
                                <i class="icon-info"></i>
                            </span>
                        </div>
                        <div class="section-list-container__body">
                            <div class="section-list-container__item">
                                <div class="row row-cols-3">
                                    <div class="col-2">
                                        <span>11:24</span>
                                    </div>
                                    <div class="col-7">
                                        <p>Мусорный бак 20.800.60.PE</p>
                                    </div>
                                    <div class="col-3">
                                        <p>194 кг.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="section-list-container__item">
                                <div class="row row-cols-3">
                                    <div class="col-2">
                                        <span>11:12</span>
                                    </div>
                                    <div class="col-7">
                                        <p>Мусорный бак 20.800.60.PE</p>
                                    </div>
                                    <div class="col-3">
                                        <p>193.5 кг.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="section-list-container__item">
                                <div class="row row-cols-3">
                                    <div class="col-2">
                                        <span>10:42</span>
                                    </div>
                                    <div class="col-7">
                                        <p>Мусорный бак 20.800.60.PE</p>
                                    </div>
                                    <div class="col-3">
                                        <p>195 кг.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="section-list-container__item">
                                <div class="row row-cols-3">
                                    <div class="col-2">
                                        <span>10:38</span>
                                    </div>
                                    <div class="col-7">
                                        <p>Мусорный бак 20.800.60.PE</p>
                                    </div>
                                    <div class="col-3">
                                        <p>194 кг.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="section section-list-container">
                        <div class="section-list-container__header">
                            <h2 class="h6">Брак</h2>
                            <span class="badge badge_outline_danger h6 d-flex align-content-center">
                                <span class="me-2">1</span>
                                <i class="icon-info"></i>
                            </span>
                        </div>
                        <div class="section-list-container__body">
                            <div class="section-list-container__item">
                                <div class="row row-cols-2">
                                    <div class="col">
                                        <span>11:16</span>
                                    </div>
                                    <div class="col me-auto">
                                        <span>2 шт. 5 кг.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="section section-list-container">
                        <div class="section-list-container__header">
                            <h2 class="h6">Отходы</h2>
                            <span class="badge badge_outline_warning h6 d-flex align-content-center">
                                <span class="me-2">3</span>
                                <i class="icon-info"></i>
                            </span>
                        </div>
                        <div class="section-list-container__body">
                            <div class="section-list-container__item">
                                <div class="row row-cols-3">
                                    <div class="col-2">
                                        <span>10:38</span>
                                    </div>
                                    <div class="col-8">
                                        <p>Отходы литьевые 190.91.80</p>
                                    </div>
                                    <div class="col-2">
                                        <span>1 кг.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="section-list-container__item">
                                <div class="row row-cols-3">
                                    <div class="col-2">
                                        <span>9:45</span>
                                    </div>
                                    <div class="col-8">
                                        <p>Отходы литьевые 190.91.80</p>
                                    </div>
                                    <div class="col-2">
                                        <span>1 кг.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="section-list-container__item">
                                <div class="row row-cols-3">
                                    <div class="col-2">
                                        <span>8:12</span>
                                    </div>
                                    <div class="col-8">
                                        <p>Отходы литьевые 190.91.80</p>
                                    </div>
                                    <div class="col-2">
                                        <span>1 кг.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="section section-list-container">
                        <div class="section section-list-container">
                            <div class="section-list-container__header">
                                <h2 class="h6">Простои</h2>
                                <span class="badge badge_danger h6 d-flex align-content-center">
                                    <span class="me-2">1</span>
                                    <i class="icon-info"></i>
                                </span>
                            </div>
                            <div class="section-list-container__body">
                                <div class="section-list-container__item">
                                    <div class="row row-cols-4">
                                        <div class="col-2">
                                            <span>Начало</span>
                                        </div>
                                        <div class="col-4">
                                            <p style="text-align:end;">11:43</p>
                                        </div>
                                        <div class="col-2">
                                            <span>Конец</span>
                                        </div>
                                        <div class="col-4">
                                            <p style="text-align:end;">12:26</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>