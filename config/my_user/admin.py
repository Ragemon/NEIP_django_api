from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Register your models here.
from my_user.models import Person
from my_user.forms import CustomUserChangeForm, CustomUserCreationForm


class PersonAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = Person
    list_display = ("email", "is_staff", "is_active",)
    list_filter = ("email", "is_staff", "is_active",)
    fieldsets = (
        (None, {
            'fields': (
                ("first_name", "other_names", "last_name", "profile_pic", "email", "password",
                 "dob", "region", "primary_phone", "secondary_phone", "status", "position")
            ),
        }),
        ("Permissions", {"fields": ("is_staff", "is_active")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "password1", "password2", "is_staff", "is_active")
        }),
    )
    search_fields = ("email",)
    ordering = ("email",)
    # fields = ["first_name", "last_name", "email", "password", "dob", "region", "primary_phone", "secondary_phone"]


admin.site.register(Person, PersonAdmin)
