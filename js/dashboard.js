/*
    SI YO INGRESARÁ DIRECTAMENTE
    A DASHBOARD.HTML 
    SIN HABERME LOGEADO
    DEBERIA DE DEVOLVERME A INDEX.HTML

    --> codigo parecido dentro de profefavorito
    --> localStorage()
*/

const compras = [
    {   
        "id": "12",
        "uuid": "15414581asda1a1x",
        "nombre": "Compra en Real Plaza",
        "monto": "S/. 14.25",
        "detalle": "La compra se realizó en Real Plaza La Marina a las 9:30pm",
        "productos": [
            {
                "SKU": "14815",
                "nombre": "Cuerda de pescador - 1m",
                "monto": "S/ 10.25",
                "imagen": "img/cuerda.jpg"
            },
            {
                "SKU": "145811",
                "nombre": "Gaseosa Inka Cola",
                "monto": "S/ 2.00",
                "imagen": "img/gaseosaI.webp"
            },
            {
                "SKU": "148112",
                "nombre": "Gaseosa Coca Cola",
                "monto": "S/ 2.00",
                "imagen": "img/gaseosac.webp"
            }
        ]
    },
    {
        "id": "16",
        "uuid": "15414581ytytaaddq1",
        "nombre": "Compra en Monterrico",
        "monto": "S/. 48.25",
        "detalle": "La compra se realizó en Monterrico a las 7:20pm",
        "productos": [
            {
                "SKU": "177774",
                "nombre": "Pala de montar",
                "monto": "S/ 20.25",
                "imagen": "img/pala.jpg"
            },
            {
                "SKU": "177771",
                "nombre": "Pintura SoldiMix",
                "monto": "S/ 9.00",
                "imagen": "img/pintura.jpg"
            },
            {
                "SKU": "177779",
                "nombre": "Terrocal en Pomo",
                "monto": "S/ 11.00",
                "imagen": "img/terocal.webp"
            }
        ]
    },
    {
        "id": "18",
        "uuid": "1566664514aa",
        "nombre": "Compra en Azángaro",
        "monto": "S/. 200",
        "detalle": "La compra se realizó en Azángaro a las 6:06pm",
        "productos": [
            {
                "SKU": "666",
                "nombre": "Vela negra",
                "monto": "S/ 200",
                "imagen": "img/vela.jpg"
            }
        ]
    }
];

//Imprimir esa lista de compras
const $misProductos = $("#misProductos");
compras.forEach((compra) => {
    //2. Crear una NUEVA URL donde usemos de parametro el ID
    const link = "producto.html?idcompra="+compra.id;
    const template = `
        <li class="collection-item avatar" data-id="${compra.id}" data-uuid="${compra.uuid}">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">${compra.nombre}</span>
            <p>
                ${compra.detalle}        
            </p>
            <p class="precio">
                ${compra.monto}
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                <i class="material-icons">grade</i>
                Ver producto
            </a>
        </li>
    `;
    $misProductos.append(template);
});

/*
    3. En esa URL vamos a leer el parametro 
    e imprimir los datos de los productos
*/

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcompra = params.get("idcompra");
let misproductos = [];
if (idcompra) {
    compras.forEach((compra) => {
        if (compra.id == idcompra) {
            const mytitle = "Historial de productos de " + compra.nombre;
            $("#myTitle").html(mytitle);
            misproductos = compra.productos;           
        }
    });
    if (misproductos.length > 0) {
        misproductos.forEach((producto)=> {
            const template = `
                <li class="collection-item">
                    <img src="${producto.imagen}" alt="imagen">
                    <p class="sku">SKU: ${producto.SKU}</p>
                    <p class="nombre">${producto.nombre}</p>
                    <p class="monto">${producto.monto}</p>
                </li>
            `;
            $("#myProducts").append(template);
        });
    }
}