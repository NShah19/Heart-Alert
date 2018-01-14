from mongoengine import *
from flask import Flask, request
import random
import string

app = flask(__name__)
connect('heartAlert_db' )

@app.route('/user',  methods=['POST'])
def setUpUser():
    post_data = request.get_json()
    newPerson = Person()
    newPerson.name = post_data['name']
    newPerson.phone = post_data['number']
    User.basicInfo = newPerson
    User.email = post_data['email']

def getAccessCode():
    return(''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(8)))

def findMedInfo(uniqueCode):
    for code in User.objects:
        if code.accessCode == uniqueCode:
            return 

class Person(Document):
    name = StringField(required=True, max_length=70)
    phone = IntField(required=True, max_length=10)

class User(Document):
    basicInfo = ReferenceField(Person)
    email = EmailField()
    accessCode = IntField(required=True, max_length=8)
    
class MedicalInfo(Document):
    age = IntField(required=True, max_length=3)
    userHistory = BooleanField()
    familyHistory = BooleanField()
    medications = ListField(StringField(max_length=20))

#create collection
#this means that you need to pull each element from the databases
#keep getting the information -> store in list/tuple -> run for loop

#post_1 = Person(
    #name = "Nilay",
    #phone = 420696969
#)

#post_2 = Person(
   # name = "Luca",
    #phone = 6966966969
#)

#post_1.save()
#post_2.save()

#for user in Person.objects:
    #print (user.name)
