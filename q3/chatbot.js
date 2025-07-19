
function getresponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hi") || msg.includes("hello")) 
    {
        return "Hello How can I help you?";
    } 
    else if (msg.includes("how are you")) 
    {
        return "I am just a bot, but I'm doing great ";
    } 
    else if (msg.includes("bye") || msg.includes("by")) 
    {
        return "Goodbye Have a nice day!";
    } 
    else 
    {
        return "Sorry, I didn't understand that";
    }
}

module.exports = getresponse;
