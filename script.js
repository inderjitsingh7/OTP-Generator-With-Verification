let Display_OTP_Box = document.querySelector('.display-OTP-Box');
let Get_OTP_BOX = document.querySelector('.Get-Otp');
let Verify_Box = document.querySelector('.Verify-Box');
let Success_Box = document.querySelector('.Success-box');
let Not_Verify_Box = document.querySelector('.Not-Verify');

let OTP = ``;

function createOTP() {
    for (let i = 0; i < 4; i++) {
        let value = Math.floor(Math.random() * 9)

        OTP += value
    }
    makeChanges();
}

let otp_value = document.querySelector('.otp-value');

function makeChanges() {
    otp_value.innerHTML = OTP
    Get_OTP_BOX.classList.remove('active');
    Display_OTP_Box.classList.add('active');
    callTimer();
    Verify_Box.classList.add('active');
}

let setTimer = document.querySelector('.setTimer');
let set_Interval;
function callTimer() {
    let num = 21
    set_Interval = setInterval(() => {
        if (num > 0) {
            num = num - 1
            if (num == 0) {
                num = 0
                returnPage();
            }
        }
        setTimer.innerHTML = num + 's'
    }, 1000)

}

let X_Btn = document.querySelector('.X-Btn');
X_Btn.addEventListener('click', () => {
    Display_OTP_Box.classList.remove('active');
})

function returnPage() {
    location.reload(true)
    alert('Sorry Time is OUT. Please Try Again')
}

// Get Input Value

let Inupt_Value = ``;

let input = document.querySelector('.input');
input.addEventListener('input', (event) => {
    Inupt_Value = event.target.value
})

let Submit_OTP = document.getElementById('Submit_OTP');
Submit_OTP.addEventListener('click', () => {
    checkOTP();
})

function checkOTP() {
    if (Inupt_Value == OTP) {
        Display_OTP_Box.classList.remove('active');
        Verify_Box.classList.remove('active');
        Get_OTP_BOX.classList.remove('active');
        Success_Box.classList.add('active');
        clearInterval(set_Interval);
    }
    else if (Inupt_Value == '') {
        alert('Please Enter OTP')
    }
    else {
        Display_OTP_Box.classList.remove('active');
        Verify_Box.classList.remove('active');
        Get_OTP_BOX.classList.remove('active');
        Not_Verify_Box.classList.add('active');
        clearInterval(set_Interval);
    }
}

let goBack = document.querySelectorAll('.goBack');
goBack.forEach((click) => {
    click.addEventListener('click', () => {
        location.reload(true)
    })
})


Get_OTP_BOX.classList.add('active');

// click OTP Generate Btn
let Otp_gen_btn = document.getElementById('Otp-gen-btn')
Otp_gen_btn.addEventListener('click', () => {
    createOTP();
})