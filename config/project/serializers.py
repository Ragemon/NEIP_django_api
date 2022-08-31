from .models import Project, Report
from my_user.models import Person
from rest_framework import serializers
from django.db.models import Sum


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = "__all__"

class ProjectSerializer(serializers.ModelSerializer):
    total_projects = serializers.SerializerMethodField()
    # total_beneficiaries =serializers.SerializerMethodField()
    region = serializers.CharField(source="get_region_display")
    reports = ReportSerializer(many=True)

    class Meta:
        model = Project
        
        fields = "__all__"
        ordering_fields = ["id", "project_name", "region", "status"]
        ordering = ["-id"]
        order_by = ["region"]

    def get_total_projects(self, obj):
        gift = []
        for i in Project.REGION_CHOICES:
            gift.append(
                {i[0]: Project.objects.all().filter(region=i[0]).count()})
        print(gift)
        
        pr = Project.objects.all()
        return {"project_no": Project.objects.all().count(), "beneficiary_no": Person.objects.all().count(), 
        "loan_sum": Project.objects.all().aggregate(Sum("loan_amount")), "region_count":gift}

        # the code below will give persons with are have stated a project
        # "beneficiaries_no": obj.founders_name.count()}

