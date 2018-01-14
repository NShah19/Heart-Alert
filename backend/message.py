from twilio.twiml.messaging_response import Message, MessagingResponse
from Database import retrieveName  
import string

response = MessagingResponse()
name = retrieveName()
response.message(name + "has suffered a heart attack. 911 has been notified and help will be arriving soon.")

