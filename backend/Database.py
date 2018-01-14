from mongoengine import *
from flask import Flask
from flask import request
import random
import string

app = Flask(__name__)
connect('heartAlert_db', port = 'process.env.PORT')
code = None

class Contact(Document):
    name1 = StringField(max_length=70)
    phone1 = IntField(max_length=10)
    name2 = StringField(max_length=70)
    phone2 = IntField(max_length=10)
    name3 = StringField(max_length=70)
    phone3 = IntField(max_length=10)
    key = IntField(min_value=1)

class User(Document):
    name = StringField(max_length=70)
    phone = IntField(max_length=10)
    address = StringField()
    accessCode = StringField(max_length=8)
    key = IntField(min_value=1)
    
class MedicalInfo(Document):
    age = IntField( max_length=3)
    userHistory = StringField(max_length=3)
    familyHistory = StringField(max_length=3)
    medications = StringField()
    key = IntField(min_value=1)

@app.route('/user',  methods=['POST'])
def setUpUser():
    post_data = request.get_json()
    print(post_data)
    person = User(
    name = post_data['name'],
    phone = post_data['number'],
    address = post_data['address'],
    accessCode = getAccessCode(),
    key = User.objects.count()+1)
    person.save()
    code = person.accessCode
    print(person.accessCode)
    return 'OK'
    #store person in database

@app.route('/contact', methods=['POST'])
def setUpContact():
    post_data = request.get_json()
    contact = Contact()
    contact.name1 = post_data['name1']
    contact.phone1 = post_data['number1']
    contact.name2 = post_data['name2']
    contact.phone2 = post_data['number2']
    contact.name3 = post_data['name3']
    contact.phone3 = post_data['number3']
    contact.key = Contact.objects.count()+1
    contact.save()
    print(code)
    return 'OK'

@app.route('/med', methods=['POST'])
def setUpMed():
    post_data = request.get_json()
    meds = MedicalInfo()
    meds.age = post_data['age']
    meds.userHistory = post_data['past']
    meds.familyHistory = post_data['family']
    meds.medications = post_data['meds']
    meds.key = Contact.objects.count()+1
    meds.save()
    return 'OK'

@app.route('/name', methods=['POST'])
def retrieveName():
    post_data = request.get_json()
    print(post_data)
    name = post_data['name']
    return name

@app.route('/lock', methods=['GET'])
def getLock():
    return HTTP_200_OK

def getAccessCode():
    return(''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(8)))

def findMedInfo(uniqueCode):
    return User.objects(accessCode = uniqueCode)

def getAddress(user_name):
    return User.objects(accessCode = uniqueCode).address

def getAccessCode(user_name):
    return User.objects(accessCode = uniqueCode).accessCode

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)


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
