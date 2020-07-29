// event pada saat link di klik
$('.page-scroll').on('click', function (e) {
    // ambil isi href
    var tujuan = $(this).attr('href'); // page-scroll yg diclick aja

    // tangkap elemen bersangkutan (ambil sectionnya)
    var elemenTujuan = $(tujuan);  // mengembalikan section terpilih

    // pindahkan scroll pake animasi
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});