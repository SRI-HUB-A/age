function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
  
    if (!dob || dob == "Invalid Date") {
      document.getElementById('result').innerText = "Please enter a valid date of birth.";
      return;
    }
  
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    document.getElementById('result').innerText = `You are ${age} years old.`;
  }
  