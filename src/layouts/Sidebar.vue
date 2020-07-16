<template>
    <div class="card-wrapper">
        <div class="card-menu">
            <div class="card card-content">
                <h5 class="title-card">Taquería</h5>
                <hr />
                <b-collapse
                    class="card"
                    animation="slide"
                    v-for="(collapse, index) of collapses"
                    :key="index">
                    <div
                        slot="trigger"
                        slot-scope="props"
                        class="card-header"
                        role="button">
                        <p class="card-header-title">
                            <router-link :to="collapse.router">
                                {{ collapse.title }}
                            </router-link>    
                        </p>
                        <a class="card-header-icon">
                            <b-icon
                                :icon="props.open ? 'menu-down' : 'menu-up'">
                            </b-icon>
                        </a>
                    </div>
                </b-collapse>
            </div>

            <div class="card card-content">
                <h5 class="title-card">Reportes</h5>
                <hr />
                <b-collapse
                    class="card"
                    animation="slide"
                    v-for="(collapse, index) of secondMenu"
                    :key="index">
                    <div
                        slot="trigger"
                        slot-scope="props"
                        class="card-header"
                        role="button">
                        <p class="card-header-title">
                            <router-link :to="collapse.router">
                                {{ collapse.title }}
                            </router-link>
                        </p>
                        <a class="card-header-icon">
                            <b-icon
                                :icon="props.open ? 'menu-down' : 'menu-up'">
                            </b-icon>
                        </a>
                    </div>
                </b-collapse>
            </div>
        </div>
        <!-- START: pages -->
        <div class="rpp-card">
            <slot />
        </div>
        <!-- START: pages -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            collapses: [
                {
                    title: 'Usuarios',
                    router: '/users'
                },
                {
                    title: 'Ingredientes',
                    router: '/ingredients'
                }
            ],
            secondMenu: [
                {
                    title: 'Reportes',
                    router: 'report'
                },
                {
                    title: 'Tienda',
                    router: 'store'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .card-content {
        margin: 20px;
        width: 100%;
    }
    .title-card {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #db2722;
    }
    .card-wrapper {
        display: grid;
        grid-template-columns: 350px 1fr;
        gap: 1rem;
    }
    .rpp-card {
        padding: 1.5rem;
    }
</style>
