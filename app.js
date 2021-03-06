const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
 "I'm doing fine, what about you?",
 "Glad to hear it. "
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://www.flaticon.com/svg/vstatic/svg/3048/3048122.svg?token=exp=1613503119~hmac=9f44fe8749fc5f612595d7a62ab2a545";
const PERSON_IMG = "https://www.flaticon.com/svg/vstatic/svg/4228/4228161.svg?token=exp=1613503248~hmac=3dbb368c6baf30081f0295f1c5b02231";
const BOT_NAME = "Ahmed";
const PERSON_NAME = "Ali";

msgerForm.addEventListener("submit", event => {
 event.preventDefault();

 const msgText = msgerInput.value;
 if (!msgText) return;

 appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
 msgerInput.value = "";

 botResponse();
});

function appendMessage(name, img, side, text) {
 const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

 msgerChat.insertAdjacentHTML("beforeend", msgHTML);
 msgerChat.scrollTop += 500;
}

function botResponse() {
 const r = random(0, BOT_MSGS.length - 1);
 const msgText = BOT_MSGS[r];
 const delay = msgText.split(" ").length * 100;

 setTimeout(() => {
  appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
 }, delay);
}

// Utils
function get(selector, root = document) {
 return root.querySelector(selector);
}

function formatDate(date) {
 const h = "0" + date.getHours();
 const m = "0" + date.getMinutes();

 return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
 return Math.floor(Math.random() * (max - min) + min);
}
