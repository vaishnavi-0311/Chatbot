
const chatInput = document.getElementById("chat-area");
const sendBtn = document.getElementById("send-btn");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotContainer = document.querySelector(".container");
const body = document.querySelector("body");


// Function to create chat messages
const createChatMessage = (message, className) => {
    const chatItem = document.createElement("li");
    chatItem.className = (className);

    if (className === "chat-outgoing") {
        chatItem.innerHTML = `<p>${message}</p>`;
    } else {
        chatItem.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    }

    return chatItem;
};


const generateresponse = (userInput) => {
        // Normalize the input to lowercase for easier matching
        const input = userInput.toLowerCase().trim();
    
        // Basic responses based on keywords
        if (input.includes("hello") || input.includes("hi")  || input.includes("hy")  || input.includes("hey")) {
            return "Hello! How can I assist you today?";
        } else if (input.includes("how are you")) {
            return "I'm a bot, but I'm here and ready to help!";
        } else if (input.includes("what is your name")) {
            return "I'm your friendly chatbot assistant!";
        } else if (input.includes("bye") || input.includes("goodbye")) {
            return "Goodbye! Have a great day!";
        } else if (input.includes("help")) {
            return "Sure, I'm here to help! What do you need assistance with?";
        } else if (input.includes("thanks") || input.includes("thank you")) {
            return "You're  welcome!";
        } else {
            return "I'm sorry, I didn't quite catch that. Could you rephrase your question?";
        }
    }


// Function to handle sending chat
const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append user message
    chatbox.appendChild(createChatMessage(userMessage, "chat-outgoing"));
    chatInput.value = "";
   

    const typing = createChatMessage("Typing...", "chat-incoming");
    chatbox.appendChild(typing);
    chatbox.scrollTop = chatbox.scrollHeight;


    // Bot's response after a short delay
    setTimeout(() => {

        chatbox.removeChild(typing);

        const botMessage = generateresponse(userMessage);  // Example bot message

        chatbox.appendChild(createChatMessage(botMessage, "chat-incoming"));

        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to latest message
    }, 900);

    
};

// Event listeners
sendBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // Prevent line break
        handleChat();
    }
});



// Mode Changes



let modebtn = document.getElementById("mode");
let curr="";

    modebtn.addEventListener("click", function(){
    if(curr === "#bcdbf3"){
        
        curr="#232b31";
         document.querySelector(".chatbox").style.backgroundColor ="#232b31";
         document.querySelector("body").style.backgroundColor = "#232b31";
    }
    else{
        curr="#bcdbf3";
        document.querySelector(".chatbox").style.backgroundColor ="#8EBDEA";
        document.querySelector("body").style.backgroundColor = "#bcdbf3";
    }
    console.log(curr);
    
    
});


chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});



