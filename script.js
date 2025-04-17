const realInput = document.getElementById("realInput");
const boxes = [...document.querySelectorAll(".fake-input")];

function focusInput() {
  realInput.focus();
}

realInput.addEventListener("input", () => {
  const value = realInput.value;
  boxes.forEach((box, i) => {
    box.textContent = value[i] || "";
  });
});

function handleConfirm() {
    const carNumber = realInput.value;
    const overlay = document.getElementById("overlay");

    if (carNumber.length !== 4) {
        alert("차량 번호는 4자리를 입력해야 합니다.");
        return;
    }

    overlay.style.display = "flex"; // ✅ 로딩 시작(전체 화면 덮기)
    
    fetch("https://parking-fpew.onrender.com/api/data", {
    //fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ car_number: carNumber })
      })
        .then(response => response.json())
        .then(data => {
          alert("서버 응답: " + data.result);
        })
        .catch(error => {
        alert("요청 실패: " + error);
    })
    .finally(()=>{
      overlay.style.display = "none"
    });
}
