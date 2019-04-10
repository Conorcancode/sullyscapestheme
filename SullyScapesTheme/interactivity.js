let mobileMenuToggle = false;

function eventAssignments(){
    let hamburger = document.getElementById('sandwichButton')
    hamburger.addEventListener('click', menuHandler)

    let dateSpan = document.getElementById('date')
    assignDate(dateSpan)

    let bioFrames = document.getElementsByClassName('singleBio')
    
    for(let i = 0; i < bioFrames.length; i++){
        bioFrames[i].addEventListener('click', bioHandler)
    }

    if(document.getElementById('continueButton')){
        let formContinue = document.getElementById('continueButton')
        formContinue.addEventListener('click', advanceForm)
    }
    let formBack = document.getElementsByClassName('go-back')
    
    for(let i = 0; i < formBack.length; i++){
        formBack[i].addEventListener('click', goBackForm)
    }

    let quizPhotos = document.getElementsByClassName('quizPhoto')
    
    for (let i = 0; i < quizPhotos.length; i++){
        quizPhotos[i].addEventListener('click', spotlightPhoto)
    }


}

function menuHandler(){
    let menuList = document.getElementById('menuList')
    if(mobileMenuToggle === false){
        menuList.classList.add('open-menu-list')

        mobileMenuToggle = true
    } else {
        menuList.classList.remove('open-menu-list')
        mobileMenuToggle = false
    }
}

function bioHandler(e){
    let description = e.target.nextElementSibling

    if(description.classList){
        if(description.classList.contains('bio-description')){
            toggleBioVisibility(description)
        }
    }
    
}

function toggleBioVisibility(bio){

    if(bio.classList.contains('visible-bio')){
        bio.classList.remove('visible-bio')
    } else {
        bio.classList.add('visible-bio')
    }
}

function advanceForm(){
    let page1 = document.getElementById('personalInfo')
    let page2 = document.getElementById('styleInfo')
    let title = document.getElementById('formLegend')
    let textInputs = document.getElementsByClassName('text-input')
    let radioInputs = document.getElementsByClassName('radio-input')

    let invalidForms = prevalidateForm(textInputs, radioInputs)
    if(invalidForms === false){
        page1.classList.remove('active-field')
        page2.classList.add('active-field')
        title.innerHTML = 'Style Info'
    } else {
        var array1 = Array.prototype.slice.call(document.getElementsByClassName("text-input"), 0);
        var array2 = Array.prototype.slice.call(document.getElementsByClassName("radio-input"), 0);
        let allInputs = array1.concat(array2)
        for(let i = 0; i < allInputs.length; i++){
            if(allInputs[i].classList.contains('invalid-form')){
                allInputs[i].classList.remove('invalid-form')
            }
        }

        for(let i = 0; i < invalidForms.length; i++){
            invalidForms[i].classList.add('invalid-form')
            
        }
    }


}

function goBackForm(){
    let page1 = document.getElementById('personalInfo')
    let page2 = document.getElementById('styleInfo')
    let title = document.getElementById('formLegend')
    page1.classList.add('active-field')
    page2.classList.remove('active-field')
    title.innerHTML = 'Personal Info'
}

function prevalidateForm(text, radio){
    let invalidNodes = []

    for(let i = 0; i < text.length; i++){
        if(text[i].checkValidity() === false){
            invalidNodes.push(text[i])
        }
    }

    for(let i = 0; i< radio.length; i++){
        if(radio[i].checkValidity() === false){
            invalidNodes.push(radio[i])
        }
    }

    if(invalidNodes.length > 0){
        return invalidNodes;
    }
    return false
}

function spotlightPhoto(e){
    let photo = e.target

    if(photo.classList.contains('zoomPhoto') === false){
        photo.classList.add('zoomPhoto')
    } else {
        photo.classList.remove('zoomPhoto')
    }
}

function assignDate(text){
    let date = new Date()

    text.innerHTML = date.getFullYear()
    console.log(date.getFullYear())
}
eventAssignments()
