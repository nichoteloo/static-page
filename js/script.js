// event pada saat link di klik
$('.page-scroll').on('click', function () {
    // ambil isi href
    var tujuan = $(this).attr('href'); // page-scroll yg diclick aja

    // tangkap elemen bersangkutan
    var elemenTujuan = $(tujuan);  // mengembalikan section terpilih

    // pindahkan scroll pake animasi
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000);

});