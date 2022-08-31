from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from my_user.models import Person


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = Person
        fields = ("email",)



class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = Person
        fields = ("email",)