from twilio.twiml.voice_response import VoiceResponse, Say
from Database import retrieveName, getAddress, getAccessCode 
import string
from flask import Flask

app = Flask(__name__)

@app.route("/voice", methods=['GET', 'POST'])
def voiceMessage():
    response = VoiceResponse()
    name = retrieveName()
    address = getAddress(name)
    accessCode = getAccessCode(name)
    message = name + "has suffered a heart attack. Send medical help to " + address + ". " + name + "'s medical information can be accessed with the code" + accessCode + "."
    response.say(message)
    response.pause(3)
    response.say(message)
    return str(response)

if __name__ == "__main__":
    app.run(debug=True)

