export default {
    name: "my-header",
    template: /*html*/`
        <header>
            <a href="#" class="logo"><span>{{titulos.letra}}</span>{{ titulos.resto }}</a>
            <ul class="navbar">
                <li><a href="#" class="active">{{titulos.titulo1}}</a></li>
                <li><a href="#">{{titulos.titulo2}}</a></li>
                <li><a href="#">{{titulos.titulo3}}</a></li>
                <li><a href="#">{{titulos.titulo4}}</a></li>
                <li><a href="#">{{titulos.titulo5}}</a></li>
                <li><a href="#">{{titulos.titulo6}}</a></li>
            </ul>
            <div class="menu-btn">
                <span>{{titulos.titulo7}}</span>
                <div class="bx bx-menu" id="menu-icon"></div>
            </div>

        </header>
    `,
    props: {
        titulos: Object
    }

}