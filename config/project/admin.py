from django.contrib import admin

from project.models import Project, Report

# Register your models here.


class ProjectAdmin(admin.ModelAdmin):
    class Meta:
        fields = "__all__"


class ReportAdmin(admin.ModelAdmin):
    class Meta:
        fields = "__all__"


admin.site.register(Project, ProjectAdmin)

admin.site.register(Report, ReportAdmin)
