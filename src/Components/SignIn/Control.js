

function createDivWithClass(className) {

    let div = document.createElement('div')
    div.setAttribute("class", className)
    return div

}

function verifie(nom_controle) {
    var ctr = document.getElementById(nom_controle)
    var long = ctr.value.length
    var message = document.getElementById('message')
    const setError = () => {
        ctr.setAttribute('class', 'error')
    }
    const removeError = () => {
        ctr.removeAttribute('class')
    }

    if (nom_controle === 'mail') {
        const reg = /^([0-9a-zA-Z_.@]){0,30}$/
        console.log(reg.test(ctr.value));
        if ( document.getElementById(nom_controle).value.indexOf('.') == -1 || !reg.test(ctr.value)) {
                setError()
                message.innerText = 'addresse mail non conforme (.,@) et pas d espace insecable'
                b_mail = false
           
        }
        else {
            removeError()
            message.innerText = 'Tous les champs doivent etre remplis'

            b_mail = true
        }

    }
    else if (nom_controle === 'nom' || nom_controle === 'prenom') {
        
        const reg = /^([0-9a-zA-Z_]){6,20}$/
        console.log('ici');
        console.log(ctr.value);
        console.log(reg.test(ctr.value));

        if (!reg.test(ctr.value)) {
            setError()
            message.innerText = 'le nom ne peut etre compose que de lettre de chiffre ou du caractere  _ et avoir entre 6 et 20 caracteres'

        }
        else {

            removeError()
            message.innerText = 'Tous les champs doivent etre remplis'
            b_mp = false


        }
    }
    else if (nom_controle === 'numero') {

        const reg = /^6(7|5|8|9|2)/
        let ff = parseInt(ctr.value)
        console.log();



        if (!reg.test(ctr.value) || ctr.value.length != 9 || !(parseInt(ctr.value) == ctr.value)) {
            setError()
            message.innerText = 'Commencer par un "6" suivis d un "8" "7" "5" ou "2" , un numero a 9 chiffres'
            b_numero = false
        }
        else {
            removeError()
            message.innerText = 'Tous les champs doivent etre remplis'
            b_numero = true

        }
    }
    else if (nom_controle === 'password') {
        const reg = /[A-Z]/
        const reg2 = /[a-z]/
        const reg3 = /\d/

        if (!reg2.test(ctr.value) || !reg3.test(ctr.value) || !reg.test(ctr.value) || long < 9) {
            setError()
            message.innerText = 'Doit posseder au moins 5 caracteres dont 1 maj 1 min et 1 nombre'

        }
        else {

            removeError()
            message.innerText = 'Tous les champs doivent etre remplis'
            b_mp = false


        }
    }

    else if (nom_controle === 'vpassword') {

        if (document.getElementById("password").value != ctr.value) {
            setError()
            message.innerText = 'Les mdp doivent concorder'
            b_mp = false
        }
        else {
            removeError()
            message.innerText = 'Tous les champs doivent etre remplis'
            b_mp = true
        }
    }
 
    else if (long < 4) {
        setError()
        message.innerText = 'pas moins de 5 caracteres'
        switch (nom_controle) {
            case 'nom':
                b_nom = false
                break;

            case 'prenom':
                b_prenom = false
                break;

        }
    }
   
    else {
        removeError()
        switch (nom_controle) {
            case 'nom':
                console.log('la');

                b_nom = true
                break;

            case 'prenom':
                b_prenom = true
                break;

        }
    }
}

export default verifie;