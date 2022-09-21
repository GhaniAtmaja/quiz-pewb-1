function validateForm() {
    let x = document.forms["myForm"]["nama-pasien"].value;
    let y = document.forms["myForm"]["ttl"].value;
    let z = document.forms["myForm"]["kecamatan"].value;
    if (x == "" || y == "" || z == "") {
        alert("Wajib Diisi Semua");
        return false;
    }
}