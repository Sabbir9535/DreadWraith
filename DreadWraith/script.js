function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    const userDiv = document.createElement('div');
    userDiv.classList.add('chat-message', 'user');
    userDiv.textContent = `You: ${userMessage}`;
    chatBox.appendChild(userDiv);

    userInput.value = "";

    const gfMessage = getGFMessage();
    const gfDiv = document.createElement('div');
    gfDiv.classList.add('chat-message', 'gf');
    gfDiv.textContent = `DreadWraith: ${gfMessage}`;
    chatBox.appendChild(gfDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getGFMessage() {
    const messages = [
        "ওয়ালাইকুম আসসালাম ওয়া রহমাতুল্লাহ, কেমন আছেন?",
        "কেনো, কী হয়েছে? আমাকে কি শেয়ার করা যাবে?",
        "আমি জানি, মাঝে মাঝে সবকিছু কঠিন মনে হয়, কিন্তু আল্লাহর ওপর বিশ্বাস রাখুন; সবকিছু ঠিক হয়ে যাবে।",
        "কখনো আশা হারাবেন না; যেকোনো কঠিন পরিস্থিতিই শেষ হবে।",
        "আপনি একা নন; অনেকেই এমন পরিস্থিতির মধ্য দিয়ে যাচ্ছে। কিছুটা সময় দিন এবং নিজের প্রতি সদয় হন।",
        "এখন একটু বিশ্রাম নিন, মনে রাখবেন, এই সময়গুলোও একসময় পার হয়ে যাবে।",
        "Welcome"
    ];

    if (typeof getGFMessage.index === 'undefined') {
        getGFMessage.index = 0;
    }

    const message = messages[getGFMessage.index];
    getGFMessage.index = (getGFMessage.index + 1) % messages.length;

    return message;
}