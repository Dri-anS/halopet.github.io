function validation(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length <5){
        text = "Tolong Gunakan Nama Lengkap Anda";
        error_message.innerHTML = text ;
        return false;
    }

    if(isNaN(phone) || phone.length <10){
        text = "Tolong Gunakan Nomor Telepon yang benar";
        error_message.innerHTML = text ;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length <7){
        text = "Tolong Cek Email Anda";
        error_message.innerHTML = text ;
        return false;
    }

    if(message.length <50){
        text = "Minimal 50 Karakter";
        error_message.innerHTML = text ;
        return false;
    }
    alert("Terimakasih Telah menghubungi kami Regards:Halopet Team");
    return false

}