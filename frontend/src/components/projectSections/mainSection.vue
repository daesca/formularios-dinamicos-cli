<template>
    <div id="main-project-section">
        <div class="mainSection__header backPrimaryColor">
            <div class="mainSection__header-image">
                <img src="../../assets/logo-arroba.png" alt="Logo Arroba" class="img-responsive">
            </div>
            <div class="mainSection__header-userOptions">
                <span class="mr-2">Administrador</span>
                <i class="icon-user"></i>
                <i class="icon-angle-down"></i>
            </div>
            <!-- <h2>Bienvenido administrador</h2> -->
        </div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">

                <div class="collapse navbar-collapse" id="navbarMain">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <!-- <a class="nav-link" href="#">Campañas <span class="sr-only">(current)</span></a> -->
                            <router-link to="/main/campaigns" class="nav-link">Campañas</router-link>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:void(0)" class="nav-link">Ponderados</a>
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
<style scoped>

    .mainSection__header{

        display: flex;
        padding: 1em 1.5em;

    }

    .mainSection__header-userOptions{

        display:flex;
        align-items: center;
        margin-left: auto;
        color: #fff;

    }

    .mainSection__header-userOptions .icon-user{

        padding: .1em .1em;
        border-radius: 50%;
        background-color: #d4d3d3;
        font-size: 2.5rem;

    }

    

    #navbarMain > ul{

        width: 80%;
        margin: 2em auto;
        position: relative;
        border-bottom: 1px solid #02243C;

    }

    #navbarMain li{

        position: relative;
        margin: 0 2em;
        font-weight: normal;
        color: #999999;
        font-size: 1.5rem;

    }

    #navbarMain li.active{

        font-weight: bold;
        color: #02243C !important;

    }

    #navbarMain li.active a{

        color: inherit;

    }

    #navbarMain li.active::after{
        content:"";
        position: absolute;
        border-bottom: 5px solid #02243C;
        width: 100%;

    }

</style>