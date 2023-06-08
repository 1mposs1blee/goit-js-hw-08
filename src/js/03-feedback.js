import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmailRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const { name: inputEmailName } = inputEmailRef;
const { name: textareaRefName } = textareaRef;

const onFormInput = e => {
  const { value: inputEmailValue } = e.currentTarget.elements.email;
  const { value: textareaRefValue } = e.currentTarget.elements.message;

  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({
      [inputEmailName]: inputEmailValue,
      [textareaRefName]: textareaRefValue,
    })
  );
};

const checkFieldsPopulate = () => {
  const parsedElems = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parsedElems) {
    inputEmailRef.value = parsedElems[inputEmailName];
    textareaRef.value = parsedElems[textareaRefName];
  }
};

const onFormSubmit = e => {
  e.preventDefault();
  e.currentTarget.reset();

  const parsedElems = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parsedElems) {
    console.log(parsedElems);
  }

  localStorage.clear();
};

checkFieldsPopulate();

form.addEventListener(
  'input',
  throttle(onFormInput, 500, { leading: true, trailing: false })
);
form.addEventListener('submit', onFormSubmit);
