let participantCount = 1;

const addButton = document.getElementById("add");
const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");

addButton.addEventListener("click", function() {
    participantCount++;

    const newParticipantHTML = participantTemplate(participantCount);

    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);

});

function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <p>Participation ${count}</p>
        <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" value="" required />
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item"
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name=fee${count}">
        </div>
        <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date${count}" />
            </div>
        <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
    </section>`;
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    const feeTotal = totalFees();
    const adultName = document.getElementById("adult_name").value;
    const participantNumber = participantCount;

    form.style.display = "none";

    const summary = document.getElementById("summary")
    summary.innerHTML = successTemplate({
        name: adultName,
        participants: participantNumber,
        fees: feeTotal
    });
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    let total = feeElements.reduce((sum, el) => {
        let val = parseFloat(el.value);
        return sum + (isNaN(val) ? 0 : val);
    }, 0);

    return total;
}

function successTemplate(info) {
    return `
    <p>Thank you ${info.name} for registering.</p>
    <p>You have registered ${info.participants} participant${info.participants >1 ? "s" : ""} and owe $${info.fees} in Fees.</p>
    `;
}