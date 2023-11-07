$(document).ready(function () {
  $(document).on('click', '.send', function () {
    const input_name = $("#name").val();
    const input_phone = $("#phone").val();
    const input_pembayaran = $("#pembayaran").val();
    const input_warna = $("#warna").val();
    const input_ukuran = $("#ukuran").val();
    const input_description = $("#description").val();

    let walink = 'https://web.whatsapp.com/send';
    const phone = '6285710786069';
    const text = 'Hi admin' + '%0A' + 'Data order jas hujan stelan akula';
    const text_yes = 'Pesanan Anda berhasil dikirim.';
    const text_no = 'Isi formulir ini untuk memesan.';

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      walink = 'whatsapp://send';
    }

    const isFormValid = validateForm(input_name, input_phone, input_pembayaran, input_warna, input_ukuran, input_description);

    if (isFormValid) {
      const checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
        '*Nama* : ' + input_name + '%0A' +
        '*No. Whatsapp* : ' + input_phone + '%0A' +
        '*Metode Pembayaran* : ' + input_pembayaran + '%0A' +
        '*Warna* : ' + input_warna + '%0A' +
        '*Ukuran* : ' + input_ukuran + '%0A' +
        '*Alamat Lengkap* : ' + input_description + '%0A';

      window.open(checkout_whatsapp, '_blank');
      document.getElementById("text-info").innerHTML = '<div class="alert alert-success">' + text_yes + '</div>';
    } else {
      document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">' + text_no + '</div>';
    }
  });

  function validateForm(name, phone, pembayaran, warna, ukuran, description) {
    // Add your validation logic here
    return !(!name || !phone || !pembayaran || !warna || !ukuran || !description);
  }
});
