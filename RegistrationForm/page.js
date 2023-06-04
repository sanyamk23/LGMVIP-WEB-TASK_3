function submitForm(event) {
  event.preventDefault();
  let form = event.target;
  let firstName = form.elements.firstName.value;
  let middleName = form.elements.middleName.value;
  let lastName = form.elements.lastName.value;
  let age = form.elements.age.value;
  let gender = form.elements.gender.value;
  let address = form.elements.address.value;
  let email = form.elements.email.value;
  let course = form.elements.course.value;
  let image = form.elements.image.files[0];

  let studentTableBody = document.getElementById('studentTableBody');
  let name = `${firstName} ${middleName} ${lastName}`;
  let imageTag = '';

  if (image) {
    let imageURL = URL.createObjectURL(image);
    imageTag = `<img src="${imageURL}" width="50" />`;
  }

  studentTableBody.innerHTML += `
      <tr>
        <td> ${imageTag}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${address}</td>
        <td>${email}</td>
        <td>${course}</td>
      </tr>
    `;

  form.reset();
}