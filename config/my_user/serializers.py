from .models import Person
from rest_framework import serializers



class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"
        ordering_fields = ["id", "project_name", "region", "status"]
        ordering = ["-id"]
