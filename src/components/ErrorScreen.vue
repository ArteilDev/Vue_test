<template>
    <div class="error-container">
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col">
                <h1 class="error__title">Ошибка!</h1>
                <h2 class="error__subtitle">Произошла ошибка при получении данных.</h2>
                <div>
                    <p class="error__reason"><slot></slot></p>
                </div>
            </div>
            <div class="col">
                <img src="/static/svg/error.svg">
            </div>
        </div>
    </div>
</template>

<script>
    setTimeout(function(){
        window.location.reload()
    }, 90000)
</script>