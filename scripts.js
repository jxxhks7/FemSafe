function checkSymptoms() {
    const symptoms = document.getElementById('symptom-input').value.toLowerCase();
    let disease = '';
    let doctor = '';
    
    // Symptom checker logic
    if (symptoms.includes('fever') && symptoms.includes('cough')) {
      disease = 'You might have the flu. Please consult a doctor.';
      doctor = 'Dr. Meena Shankar - General Physician';
    } else if (symptoms.includes('headache') && symptoms.includes('nausea')) {
      disease = 'This could be a migraine. We recommend seeing a specialist.';
      doctor = 'Dr. Neha Gupta - Neurologist';
    } else if (symptoms.includes('abdominal pain') && symptoms.includes('vomiting')) {
      disease = 'You might have gastroenteritis. Please consult a gastroenterologist.';
      doctor = 'Dr. Prathima Reddy - Gastroenterologist';
    } else if (symptoms.includes('back pain') && symptoms.includes('pelvic pain')) {
      disease = 'This could be related to menstrual issues or endometriosis. Please seek a gynecologist’s opinion.';
      doctor = 'Dr. Rina Sharma, Gynecologist ';
    } else if (symptoms.includes('irregular periods')) {
        disease = 'Irregular periods could be due to hormonal imbalance, stress, or a health condition like PCOS. Consult a doctor.';
    } else if (symptoms.includes('breast tenderness') && symptoms.includes('lump')) {
        disease = 'This could be a sign of a benign breast condition or more serious issues. Please schedule a breast exam.';
    } else if (symptoms.includes('painful urination') && symptoms.includes('lower abdominal pain')) {
        disease = 'You might have a urinary tract infection (UTI) or other urinary issues. Please consult a doctor.';
    } else if (symptoms.includes('fatigue') && symptoms.includes('mood swings')) {
        disease = 'These symptoms could be related to hormonal changes or depression. Consult a healthcare provider.';
    } else if (symptoms.includes('vaginal discharge') && symptoms.includes('itching')) {
        disease = 'This could be a yeast infection or bacterial vaginosis. Seek medical advice for proper diagnosis.';
    } else if (symptoms.includes('shortness of breath') && symptoms.includes('chest pain')) {
        disease = 'These symptoms could indicate a serious condition such as heart disease. Seek immediate medical attention.';
    } else if (symptoms.includes('hot flashes') && symptoms.includes('night sweats')) {
        disease = 'These could be signs of menopause. Consult a gynecologist for guidance.';
    } else if (symptoms.includes('heavy menstrual bleeding') && symptoms.includes('fatigue')) {
        disease = 'Heavy periods could be a sign of anemia or other underlying health issues. See a doctor for evaluation.';
    } else if (symptoms.includes('swelling in ankles') && symptoms.includes('headaches')) {
        disease = 'These could be signs of preeclampsia if you’re pregnant. Seek medical attention immediately.';
    }else {
      disease = 'Symptoms are unclear. Please consult a doctor for an accurate diagnosis.';
      doctor = 'Dr. Lisa Taylor - General Physician';
    }
  
    // Display disease prediction
    document.getElementById('result').innerHTML = `<h3>Disease Prediction:</h3><p>${disease}</p>`;
    
    // Display doctor recommendation
    document.getElementById('doctor-recommendation').innerHTML = `
      <h3>Recommended Doctor:</h3>
      <p>${doctor}</p>
      <button onclick="bookAppointment()">Book an Online Appointment</button>
    `;
  }
  
  function bookAppointment() {
    const doctor = document.getElementById('doctor-recommendation').querySelector('p').textContent;
    
    document.getElementById('appointment-booking').innerHTML = `
      <h3>Appointment Booking</h3>
      <p>You are about to book an online appointment with ${doctor}. Please fill in the details below:</p>
      <form>
        <label for="name">Name:</label><br>
        <input type="text" id="name" required><br><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" required><br><br>
        <label for="time">Preferred Time:</label><br>
        <input type="time" id="time" required><br><br>
        <button type="submit">Confirm Appointment</button>
      </form>
    `;
  }
  