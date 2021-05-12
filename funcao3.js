$(document).ready(()=>{
    $("input[name=ifone]").mask("00 0 0000 0000")
})

function addNewContact(){
    //Permitir a manipulação do Submit
    event.preventDefault();

    //Pegar os valores dos caompos do formulário
    const cpNome =$("input[name='inome']").val()
    const cpFone = $("input[name='ifone']").val()
    const cpEmail = $("input[name='iemail']").val()
    const cpLocal = $("input[name='ilocal']").val()

    if(cpFone == '' && cpEmail ==''){
        alert('Você deve informar um telefone ou um e-mail')
        $("input[name='ifone']").focus()
        return
    }

    //criar um novo elemento
    let itemContact = $('<li></li>').text(`${cpNome} | ${cpFone} | ${cpEmail} | ${cpLocal}`)
    
    //Cria botão de remover e adiciona ao item da lista
    $('<button type="button" onclick="removeContact(this)"></button>').text('Remover').appendTo(itemContact)

    //Adiciona o item a lista
    $('#listContact').append(itemContact)

    //limpeza do formulário
    $("input[name='inome']").val('')
    $("input[name='ifone']").val('')
    $("input[name='iemail']").val('')
    $("input[name='ilocal']").val('')
}

//Remove o item da lista
function removeContact(btn){
    $(btn).parent().remove()
}