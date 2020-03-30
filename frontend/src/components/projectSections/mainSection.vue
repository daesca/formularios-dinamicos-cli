<template>
    <div id="main-project-section">
        <div><h2>Bienvenido administrador</h2></div>
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse" id="navbarMain">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <!-- <a class="nav-link" href="#">Campañas <span class="sr-only">(current)</span></a> -->
                    <router-link to="/main/campaigns" class="nav-link">Campañas</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ponderados</a>
                </li>
                </ul>
            </div>
        </nav>
        </header>

        <router-view></router-view>

    </div>
</template>
<script>
export default {
    
}
</script>