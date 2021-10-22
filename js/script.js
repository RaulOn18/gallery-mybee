// $('[data-bs-toggle="tooltip"]').tooltip();
$.getJSON("../api/foto-ayang.json", function (data) {
  let menu = data.foto;
  $.each(menu, function (i, data) {
    $("#list-menu").append(
      '<div class="col mb-5"><div class="card" style="width: 18rem;"><img src="' +
        data.gambar +
        '" class="card-img-top" alt="Foto si cantik"></div></div>'
    );
  });
});
