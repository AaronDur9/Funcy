let modalElement = `
            <div class="row">
                        <div class="col-xs-12">
                            <h3>You may also in Fanthanh</h3>
                        </div>
                        <div class="col-xs-2">
                            <div class="panel panel-default panel-product">
                                <div class="panel-body">
                                    <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=a " draggable="false " alt="Item ">
                                </div>

                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="panel panel-default panel-product">
                                <div class="panel-body">
                                    <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=n " draggable="false " alt="Item ">
                                </div>

                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="panel panel-default panel-product">
                                <div class="panel-body">
                                    <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=t " draggable="false " alt="Item ">
                                </div>

                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="panel panel-default panel-product">
                                <div class="panel-body">
                                    <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=h " draggable="false " alt="Item ">
                                </div>

                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="panel panel-default panel-product">
                                <div class="panel-body">
                                    <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=a " draggable="false " alt="Item ">
                                </div>

                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="panel panel-default panel-product">
                                <div class="panel-body">
                                    <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=n " draggable="false " alt="Item ">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>`



function Ad(id, name, description, price, currency, images, time, likes, liked) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.currency = currency;
    this.images = images;
    this.time = time;
    this.likes = likes;
    this.liked = liked;
}

function createAd(adList) {
    //Meter el id

    let random = randomFunction();
    random--;
    let html = '';
    html += '<div id="anuncio-' + adList.id + '" class="anuncio">';
    html += '<div class="panel panel-default panel-product">';
    html += '<div class="panel-body">';
    html += '<picture>';
    html += '<source srcset="' + adList.images.xs[random] + ' " media="(max-width: 350px) ">';
    html += '<source srcset="' + adList.images.md[random] + ' " media="(min-width: 351px) and (max-width: 650px) ">';
    html += '<img src="' + adList.images.lg[random] + ' " draggable="false " alt="Item ">';
    html += '</picture>'
    html += '</div>';
    html += '<div class="panel-footer ">';
    html += '<div class="title ">';
    html += '<p>' + adList.name + '</p>';
    html += '<button class="btn btn-primary "> ' + adList.currency + ' ' + adList.price + '</button>';
    html += '</div>';
    html += '<div class="subtitle ">';
    html += '<button class="btn btn-default "><span class="glyphicon glyphicon-thumbs-up "></span> ' + adList.likes + '</button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}

function randomFunction() {
    var x = Math.floor((Math.random() * 3) + 1);
    return x;
    //document.getElementById("demo").innerHTML = x;
}



function createAdModal(currentAd) {

    let html = '';
    html += '<div class="modal-dialog modal-lg">';
    html += '<div class="modal-content">';
    html += '<div class="row">';

    html += '<div class="col-xs-12 col-md-8">';
    html += '<div class="panel panel-default panel-product">';
    html += '<div class="panel-body ">';
    html += '<picture>';
    html += '<source srcset="' + currentAd.images.xs[0] + ' " media="(max-width: 350px) ">';
    html += '<source srcset="' + currentAd.images.md[0] + ' " media="(min-width: 351px) and (max-width: 650px) ">';
    html += '<img src="' + currentAd.images.lg[0] + ' " draggable="false " alt="Item ">';
    html += '</picture>';
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="col-xs-6">';
    html += '<div class="row">';
    html += '<div class="col-xs-4">';
    html += '<img src="' + currentAd.images.xs[0] + ' " draggable="false " alt="Item ">';
    html += '</div>';
    html += '<div class="col-xs-4">';
    html += '<img src="' + currentAd.images.xs[1] + ' " draggable="false " alt="Item ">';
    html += '</div>';
    html += '<div class="col-xs-4">';
    html += '<img src="' + currentAd.images.xs[2] + ' " draggable="false " alt="Item ">';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-xs-4">';
    html += '<div class="row">';
    html += '<div class="col-xs-12">';
    html += '<h6>' + currentAd.description + '</h6>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-xs-offset-1 col-xs-10 col-md-3 buy-panel">';
    html += '<div class="row">';
    html += '<h6 class="col-xs-12">' + currentAd.name + ' Producto</h6>';
    html += '<p class="col-xs-12">' + currentAd.currency + ' ' + currentAd.price + ' </p>';
    html += '<div class="col-xs-12 ">';
    html += '<button class="btn fb-btn ">Añadir al carro</button>';
    html += '</div>';
    html += '<div class="col-xs-offset-2 col-xs-8 ">';
    html += '<button class="btn tw-btn ">Ey, esto mola</button>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="col-xs-6">';
    html += '<button class="btn tw-btn ">Compartir</button>';
    html += '</div>';
    html += '<div class="col-xs-6 ">';
    html += '<button class="btn tw-btn ">Lists</button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += modalElement;
    return html;

}



let temp = `<!-- <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="row">
            <div class="col-xs-8">
                <div class="panel panel-default panel-product">
                    <div class="panel-body ">
                        <picture>
                            <source srcset="http://dummyimage.com/300x300/cccccc/ffffff.png&text=a " media="(max-width: 350px) ">
                            <source srcset="http://dummyimage.com/600x600/cccccc/ffffff.png&text=a " media="(min-width: 351px) and (max-width: 650px) "><img src="http://dummyimage.com/900x900/cccccc/ffffff.png&text=a " draggable="false " alt="Item "></picture>
                    </div>
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="row">
                                <div class="col-xs-4"><img src="http://dummyimage.com/300x300/cccccc/ffffff.png&text=a " draggable="false " alt="Item "></div>
                                <div class="col-xs-4"><img src="http://dummyimage.com/300x300/cccccc/ffffff.png&text=b " draggable="false " alt="Item "></div>
                                <div class="col-xs-4"><img src="http://dummyimage.com/300x300/cccccc/ffffff.png&text=c " draggable="false " alt="Item "></div>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="row">
                                <div class="col-xs-12">
                                    <h6>Golder Clip by X</h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-3 buy-panel">
                <div class="row">
                    <h6 class="col-xs-12">Producto</h6>
                    <p class="col-xs-12">$ Precio </p>
                    <p class="col-xs-12">$ Aproximación </p>
                    <div class="col-xs-12 ">
                        <button class="btn fb-btn ">Añadir al carro</button>
                    </div>
                    <div class="col-xs-offset-2 col-xs-8 ">
                        <button class="btn tw-btn ">Ey, esto mola</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                        <button class="btn tw-btn ">Compartir</button>
                    </div>
                    <div class="col-xs-6 ">
                        <button class="btn tw-btn ">Lists</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <h3>You may also in Fanthanh</h3>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2">
                <div class="panel panel-default panel-product">
                    <div class="panel-body">
                        <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=a " draggable="false " alt="Item ">
                    </div>

                </div>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2">
                <div class="panel panel-default panel-product">
                    <div class="panel-body">
                        <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=a " draggable="false " alt="Item ">
                    </div>

                </div>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2">
                <div class="panel panel-default panel-product">
                    <div class="panel-body">
                        <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=a " draggable="false " alt="Item ">
                    </div>

                </div>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2">
                <div class="panel panel-default panel-product">
                    <div class="panel-body">
                        <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=a " draggable="false " alt="Item ">
                    </div>

                </div>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2">
                <div class="panel panel-default panel-product">
                    <div class="panel-body">
                        <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=a " draggable="false " alt="Item ">
                    </div>

                </div>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2">
                <div class="panel panel-default panel-product">
                    <div class="panel-body">
                        <img src="http://dummyimage.com/75x75/cccccc/ffffff.png&text=n " draggable="false " alt="Item ">
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>`;



function addListeners(adList) {

    //Si me pulsan en cualquier anuncio
    $(".anuncio").click(function() {

        //console.log(adList);
        let currentAd = adList[searchAd(adList, getId(this.id))];
        let modalHTML = createAdModal(currentAd);




        document.getElementById("myModal").innerHTML = modalHTML;
        //document.getElementById("myModal").innerHTML = temp;


        $("#myModal").modal();
    });
}

function getId(id) {

    return id.split('-')[1];

}

function searchAd(adList, id) {
    return adList.findIndex((element) => {

        return element.id == id;
    });
}



$(document).ready(function() {

    getAnuncios().then(function(data) {
        let adList = new Array();
        //console.log(data);
        // console.log(data[0].images.lg[0]);
        // console.log(data.length);

        for (let i = 0; i < data.length; i++) {
            adList.push(new Ad(data[i].id,
                data[i].name, data[i].description,
                data[i].price, data[i].currency,
                data[i].images, data[i].created_at,
                data[i].likes, data[i].liked));

        }
        let html = '';
        for (let i = 0; i < adList.length; i++) {

            if (i % 3 == 0) {
                html += '<div class="col-xs-12">'
            } else {
                html += '<div class="col-xs-6">';
            }

            html += createAd(adList[i]);
            html += '</div>';


        }

        // console.log(html);

        // console.log(singleAd);
        document.getElementById("ads").innerHTML = html;

        //DESCOMENTAR
        addListeners(adList);

    });



});


function getAnuncios() {

    return fetch('../assets/mocks/list.json')
        .then(function(response) {
            return response.json();
        });
}
