/* JQuery = AJAX + JS */
// $(#btnEnviar').click(function(){});

$('#btnEnviar').click((e)=>{
    e.preventDefault();
    $('.msg-error').hide();

    //Criar objeto com os dados do Formulário
    let dataForm = {
        name: $('#nome').val(),
        email: $('#email').val(),
        phone: $('#telefone').val(),
        whats: $('#whatsapp').val()
    };

    // Validar os campos do Formulário
    if (dataForm.name.length < 2) {
        $('.msg-error').text("Nome inválido").show();
        return false;
    } else if (dataForm.email.length < 7) {
        $('.msg-error').text("E-mail inválido").show();
        return false;
    } else if (dataForm.phone.length < 11) {
        $('.msg-error').text("Telefone inválido").show();
        return false;
    } else if (dataForm.whats.length < 11) {
        $('.msg-error').text("WhatsApp inválido").show();
        return false;
    }

    //Construção do AJAX
    let urlAction = "envia.html";
    $.ajax({
        url: urlAction,
        type:'POST',
        data: dataForm,
        dataType: 'json',
        async: true
    })

    console.log(dataForm)


});