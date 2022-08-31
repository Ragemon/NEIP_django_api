from django.contrib import admin


from core_api.models import Person

# Register your models here.


class PersonAdmin(admin.ModelAdmin):
    fields = ["dob", "code"]


admin.site.register(Person, PersonAdmin)
