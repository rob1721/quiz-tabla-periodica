function clickEvent(id) {
  var idHTML = id;
  document.getElementById("insert").innerHTML = "";
  console.log(idHTML);
  idtoNumber(idHTML);
  
}

//var elemento: HTMLElement = document.getElementById("sy") as HTMLElement;
//elemento.innerHTML = "py";
/*function siglaaNombre (id: string) {
  console.log(id);
}*/

var cientificaClickeada = "Clickea un elemento de la tabla periódica";

function idtoNumber(idHTML) {
  if(idHTML == 'av') cientificaClickeada = "Ángeles Alvariño";
  if(idHTML == 'ba') cientificaClickeada = "Florence Bascom";
  if(idHTML == 'ca') cientificaClickeada = "Rachel Carson";
  if(idHTML == 'cv') cientificaClickeada = "Josefina Castellvi";
  if(idHTML == 'lh') cientificaClickeada = "Inge Lehman";
  if(idHTML == 'mh') cientificaClickeada = "Wangari Maathai";
  if(idHTML == 'st') cientificaClickeada = "Marie Stopes";
  if(idHTML == 'sy') cientificaClickeada = "Maria Sibylla Merian";
  if(idHTML == 'th') cientificaClickeada = "Marie Tharp y Sylvia Earle";
  if(idHTML == 'ay') cientificaClickeada = "Hertha Ayrton";
  if(idHTML == 'cb') cientificaClickeada = "Pilar Carbonero";
  if(idHTML == 'cr') cientificaClickeada = "Josephine Cochrane";
  if(idHTML == 'ha') cientificaClickeada = "Margaret Hamilton";
  if(idHTML == 'ho') cientificaClickeada = "Grace Hopper";
  if(idHTML == 'k') cientificaClickeada = "Stephanie Kwolek";
  if(idHTML == 'la') cientificaClickeada = "Hedy Lamarr";
  if(idHTML == 'rr') cientificaClickeada = "Ángela Ruiz Robles";
  if(idHTML == 'ag') cientificaClickeada = "Maria Agnessi";
  if(idHTML == 'bs') cientificaClickeada = "Laura Bassi";
  if(idHTML == 'by') cientificaClickeada = "Pilar Bayer";
  if(idHTML == 'c') cientificaClickeada = "Emilie du Chátelet";
  if(idHTML == 'cl') cientificaClickeada = "M. Antònia Canals";
  if(idHTML == 'cs') cientificaClickeada = "M. Andrea Casamayor";
  if(idHTML == 'ge') cientificaClickeada = "Sophie Germain";
  if(idHTML == 'gv') cientificaClickeada = "Evelyn Boyd Granville";
  if(idHTML == 'h') cientificaClickeada = "Hipatia de Alejandría";
  if(idHTML == 'jh') cientificaClickeada = "Katherine Johnson";
  if(idHTML == 'ko') cientificaClickeada = "Sofía Kovalevskaya";
  if(idHTML == 'lo') cientificaClickeada = "Ada Lovelace";
  if(idHTML == 'lp') cientificaClickeada = "Nicole-Reine de Lepaute";
  if(idHTML == 'mz') cientificaClickeada = "Maryam Mirzajani";
  if(idHTML == 'no') cientificaClickeada = "Emmy Noether";
  if(idHTML == 'sm') cientificaClickeada = "Mary Sommerville";
  if(idHTML == 'wo') cientificaClickeada = "María Wonenburger";
  if(idHTML == 'an') cientificaClickeada = "Mary Anning";
  if(idHTML == 'lk') cientificaClickeada = "Mary Leaky";
  if(idHTML == 'ma') cientificaClickeada = "María Martinón Torres";
  if(idHTML == 'al') cientificaClickeada = "Frances H. Arnold";
  if(idHTML == 'bb') cientificaClickeada = "Katharine Burr Blodgett";
  if(idHTML == 'bn') cientificaClickeada = "Dorotea Barnés y las químicas españolas de la edad de plata";
  if(idHTML == 'cw') cientificaClickeada = "Dorothy Crowfoot Hodgkin";
  if(idHTML == 'fr') cientificaClickeada = "Rosalind Franklin";
  if(idHTML == 'fu') cientificaClickeada = "Gertrudis de la Fuente";
  if(idHTML == 'ju') cientificaClickeada = "Manuela Juárez";
  if(idHTML == 'ln') cientificaClickeada = "Kathleen Lonsdale";
  if(idHTML == 'me') cientificaClickeada = "Marie Meurdrac & Jane Marcet";
  if(idHTML == 'mn') cientificaClickeada = "Rosa M. Menéndez";
  if(idHTML == 'nd') cientificaClickeada = "Ida Noddack";
  if(idHTML == 'pc') cientificaClickeada = "Agnes Pockels";
  if(idHTML == 'pz') cientificaClickeada = "Marie Anne Paulze";
  if(idHTML == 'rc') cientificaClickeada = "Ellen Richards";
  if(idHTML == 'yn') cientificaClickeada = "Adá Yonath";
  if(idHTML == 'gd') cientificaClickeada = "Jane Goodall, Dian Fossey & Biruté Galdikas";
  document.getElementById("insert").innerHTML = cientificaClickeada;
}

