const EINSTIEG = 'einstieg';
const DOC_HOS = 'doc-hos';
const DOC = 'doc';
const E_CARD = 'e-card';
const HOS = 'hos';

let currentActiveCanvas = EINSTIEG;

function activateCanvas(id){
  const current = document.getElementById(currentActiveCanvas);
  const next = document.getElementById(id);
  current.className = current.className.replace('active', '');
  next.className = next.className + ' active';
  currentActiveCanvas = id;
}

/** 
 * Einstieg
 */

function handleEinstiegIcon1Click () {
  activateCanvas(DOC_HOS);
}

function handleEinstiegIcon2Click () {
  activateCanvas(HOS);
}

function handleEinstiegIcon3Click () {

}

document.querySelectorAll('[data-name="einstieg-icon-1"]').forEach(element => {
  element.onclick = handleEinstiegIcon1Click;
});

document.querySelectorAll('[data-name="einstieg-icon-2"]').forEach(element => {
  element.onclick = handleEinstiegIcon2Click;
});

document.querySelectorAll('[data-name="einstieg-icon-3"]').forEach(element => {
  element.onclick = handleEinstiegIcon3Click;
});


/**
 * doc-hos
 */

 function handleDocHosDocIcon() {
   activateCanvas(DOC);
 }

 document.querySelectorAll('[data-name="doc-hos-doc-icon"]').forEach(element => {
  element.onclick = handleDocHosDocIcon;
});

/**
 * doc
 */

 function handleDocCardIcon() {
   activateCanvas(E_CARD);
 }

 document.querySelectorAll('[data-name="doc-card-icon"]').forEach(element => {
  element.onclick = handleDocCardIcon;
});
