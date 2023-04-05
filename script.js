class Choice {
  constructor(branche, year, subject){
    this.branch = branche;
    this.year = year;
    this.subject = subject;
  }
  getLink(){
    let base_link = "./";
    let link = base_link;
    if(this.branch === 'undefined'){
      alert("Veuillez choisire une branche");
      return
    }
    link += this.branch + "/"
    if(this.year === 'undefined'){
      alert("Veuillez choisire une année");
      return
    }
    link += this.year + "/"
    if(this.subject === 'undefined'){
      alert("Veuillez choisire une matiére");
      return
    }
    link += this.subject + "/"
    return link
  }
}

let branch_selector = document.getElementById("branch");
let year_selector = document.getElementById("year");
let subject_selector = document.getElementById("subject");
let sujet_pdf = document.getElementById("sujet-pdf");
let corrige_pdf = document.getElementById("corrige-pdf");
let submit_button = document.getElementById("submit-button");


function make_pdfs_visible(){
  corrige_pdf.classList.add('fade-out');
  setTimeout(function() {
    corrige_pdf.classList.remove('fade-out');
    corrige_pdf.classList.add('fade-in');
  }, 500);

  sujet_pdf.classList.add('fade-out');
  setTimeout(function() {
    sujet_pdf.classList.remove('fade-out');
    sujet_pdf.classList.add('fade-in');
  }, 500);

}


function getChoice() {
  let chosen_branch = branch_selector.value 
  let chosen_year = year_selector.value 
  let chosen_subject = subject_selector.value 
  choice = new Choice(chosen_branch, chosen_year, chosen_subject)
  link = choice.getLink()
  if(link === undefined){
    return
  }

  make_pdfs_visible();
   
  corrige_pdf.href = link + 'corrige.pdf' 
  sujet_pdf.href = link + 'sujet.pdf' 
}

submit_button.addEventListener('click', getChoice);
