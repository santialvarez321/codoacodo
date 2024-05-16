function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var motivo = document.getElementById("motivo").value;

    if (nombre == ""){
        document.getElementById('alertanombrevacio').removeAttribute('hidden'); return false;
    }
    else {document.getElementById('alertanombrevacio').setAttribute('hidden', true);}

    if (email == ""){
        document.getElementById('alertaemailvacio').removeAttribute('hidden'); return false;
    }
    else {document.getElementById('alertaemailvacio').setAttribute('hidden', true);}

    if (mensaje == ""){
        document.getElementById('alertamensajevacio').removeAttribute('hidden'); return false;
    }
    else {document.getElementById('alertamensajevacio').setAttribute('hidden', true);}

    if (motivo == ""){
        document.getElementById('alertamotivovacio').removeAttribute('hidden'); return false;
    }
    else {document.getElementById('alertamotivovacio').setAttribute('hidden', true);}

    if ( nombre !== "" & mensaje !== "" & email !== "" & motivo !== ""){alert("Gracias por su mensaje")}


    }





