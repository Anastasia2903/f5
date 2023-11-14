function validateForm() {
    let pib = document.getElementById('pib').value;
    let phone = document.getElementById('phone').value;
    let id_card = document.getElementById('id_card').value;
    let faculty = document.getElementById('faculty').value;
    let birthdate = document.getElementById('birthdate').value;

    // Регулярні вирази для перевірки введених даних
    let pibRegex = /^[А-ЯІЇЄ][а-яіїє']+\s[А-ЯІЇЄ][а-яіїє']+\s[А-ЯІЇЄ][а-яіїє']+$/;
    let phoneRegex = /^\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,9}[-.\s]?\d{1,9}$/;
    let idCardRegex = /^[A-Z]{2}-\d{2}-\d{6}$/;
    let facultyRegex = /^[А-ЯІЇЄ]{4}$/;
    let birthdateRegex = /^\d{2}\.\d{2}\.\d{4}$/;



    // Перевірка валідності введених даних
    let isValid = true;
    if (!pibRegex.test(pib)) {
        document.getElementById('pib').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('pib').classList.remove('error');
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById('phone').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('phone').classList.remove('error');
    }

    if (!idCardRegex.test(id_card)) {
        document.getElementById('id_card').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('id_card').classList.remove('error');
    }

    if (!facultyRegex.test(faculty)) {
        document.getElementById('faculty').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('faculty').classList.remove('error');
    }

    if (!birthdateRegex.test(birthdate)) {
        document.getElementById('birthdate').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('birthdate').classList.remove('error');
    }

    // Виведення результатів
    if (isValid) {
        let result = "ПІБ: " + pib + "\nТелефон: " + phone + "\nid_card: " + id_card + "\nФакультет: " + faculty + "\nДата народження: " + birthdate;
        alert(result);
    }
}