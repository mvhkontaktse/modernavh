document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const distributor = document.getElementById('distributor').value;
    const model = document.getElementById('model').value;

    if (email && distributor && model) {
        alert('Tack för din förfrågan! Vi återkommer snart.');
        this.submit(); // Skickar formuläret
    } else {
        alert('Vänligen fyll i alla obligatoriska fält.');
    }
});
