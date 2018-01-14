from twilio.twiml.voice_response import VoiceResponse, Say
from Database import retrieveName, getAddress, getAccessCode 
import string


response = VoiceResponse()
name = retrieveName()
address = getAddress(name)
accessCode = getAccessCode(name)
message = name + "has suffered a heart attack. Send medical help to " + address + 
". " + name + "'s medical information can be accessed with the code" + accessCode + "."
response.say(message)
response.pause(3)
response.say(message)

