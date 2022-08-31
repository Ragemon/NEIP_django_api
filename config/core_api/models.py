from django.db import models
from django.contrib.auth.models import User

from phonenumber_field.modelfields import PhoneNumberField

from core_api.utils import gen_id_code

# Create your models here.


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    dob = models.DateTimeField()
    primary_phone = PhoneNumberField(unique=True, blank=True, null=True)
    secondary_phone = PhoneNumberField(unique=True, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    code = models.CharField(unique=True, max_length=10, null=False,
                            blank=False, default=gen_id_code)

    class Meta:
        ordering = ["dob", "primary_phone", "created"]

    def __str__(self) -> str:
        return self.user


# def gen_id_code():
#     not_exist = True
#     while not_exist:
#         code = "NEIP" + str(random.randint(100000, 1000000))
#         person_code = Person.objects.all()
#         if code not in person_code.code:
#             not_exist = False
#             return code
