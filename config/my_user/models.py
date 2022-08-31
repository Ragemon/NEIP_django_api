from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _
from my_user.managers import CustomUserManager
from PIL import Image


class Person(AbstractUser):

    AHAFO = "ah"
    ASHANTI = "as"
    BONO_EAST = "be"
    BRONG_AHAFO = "ba"
    CENTRAL = "ce"
    EASTERN = "ea"
    GREATER_ACCRA = "ga"
    NORTH_EAST = "ne"
    NORTHERN = "no"
    OTI = "ot"
    SAVANNAH = "sa"
    UPPER_EAST = "ue"
    UPPER_WEST = "uw"
    WESTERN_SEKONDI = "ws"
    WESTERN_NORTH = "wn"
    VOLTA = "vo"
    REGION_CHOICES = [
        (AHAFO, "AHAFO"),
        (ASHANTI, "ASHANTI"),
        (BONO_EAST, "BONO EAST"),
        (BRONG_AHAFO, "BRONG AHAFO"),
        (CENTRAL, "CENTRAL"),
        (EASTERN, "EASTERN"),
        (GREATER_ACCRA, "GREATER ACCRA"),
        (NORTH_EAST, "NORTH EAST"),
        (NORTHERN, "NORTHERN"),
        (OTI, "OTI"),
        (SAVANNAH, "SAVANNAH"),
        (UPPER_EAST, "UPPER EAST"),
        (UPPER_WEST, "UPPER WEST"),
        (WESTERN_SEKONDI, "WESTERN SEKONDI"),
        (WESTERN_NORTH, "WESTERN NORTH"),
        (VOLTA, "VOLTA"),
    ]
    username = None
    first_name = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="first names")
    last_name = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="last names")
    other_names = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="other names")
    email = models.EmailField(_("email address"), unique=True)
    region = models.CharField(
        max_length=2, choices=REGION_CHOICES, default=GREATER_ACCRA, verbose_name="region")
    profile_pic = models.ImageField(
        upload_to="media/img/avatar", default="media/img/avatar/default.jpg")
    dob = models.DateField(
        null=True, blank=True, verbose_name="date of birth")
    primary_phone = PhoneNumberField(
        unique=True, null=True, blank=True, verbose_name="primary phone number")
    secondary_phone = PhoneNumberField(
        unique=True, null=True, blank=True, verbose_name="secondary phone number")
    created = models.DateTimeField(
        auto_now_add=True, verbose_name="profile create date")
    position = models.CharField(max_length=30, default="CEO")

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    trainee = "trainee"
    complete = "completed"
    STATUS_CHOICES = (
        (trainee, "TRAINEE"),
        (complete, "COMPLETED")
    )
    status = models.CharField(choices=STATUS_CHOICES,
                              max_length=50, default=trainee)

    objects = CustomUserManager()

    def save(self, *args, **kwargs):
        super().save()  # saving image first

        img = Image.open(self.profile_pic.path)  # Open image using self
        print(self.profile_pic.path)

        new_img = (128, 128)
        img.thumbnail(new_img)
        img.save(self.profile_pic.path)

    def __str__(self) -> str:
        return self.email
