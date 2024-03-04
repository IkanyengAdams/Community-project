document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", function () {
        submitForm();
    });
  
    function submitForm() {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const healthCondition = document.getElementById('healthCondition').value;
  
        
        if (!name || !age || !gender || !healthCondition) {
            alert('Please fill in all fields');
            return;
        }
  
        
        window.location.href = 'confirmation.html';
    }
  });
  