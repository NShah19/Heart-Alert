from mongoengine import *
import random
import string

connect('heartAlert_db', host='localhost', port=27017)

def getAccessCode():
    return(''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(8)))

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

post_1 = Person(
    name = "Nilay",
    phone = 420696969
)

post_1.save()
