from django.db import models
from django.utils import timezone
import config.settings
# from django.contrib.gis.db import models

# Create your models here.


class Project(models.Model):
    """Model definition for Project."""
    AHAFO = "ah"
    ASHANTI = "as"
    BONO = "bo"
    BONO_EAST = "be"
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
        (BONO, "BONO"),
        (BONO_EAST, "BONO EAST"),
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

    project_name = models.CharField(max_length=400, unique=True)
    founders_name = models.ManyToManyField(
        config.settings.AUTH_USER_MODEL, blank=False, related_name="founders")
    category = models.CharField(max_length=100)
    regulations = models.CharField(max_length=200)
    loan_amount = models.DecimalField(
        max_digits=15, decimal_places=2, null=True, default=0,)

    lat = models.CharField(max_length=326, null=True, blank=True)
    lon = models.CharField(max_length=326, null=True, blank=True)
    created = models.DateField(blank=True, default=timezone.now)
    region = models.CharField(
        max_length=2, choices=REGION_CHOICES, default=GREATER_ACCRA, verbose_name="region")

    status_choice = [
        ("PRESIDENTIAL PITCH", "PRESIDENTIAL PITCH"),
        ("BUSINESS SUPPORT PROGRAMME", "BUSINESS SUPPORT PROGRAMME"),
        ("SEI", "SEI"),
        ("PEWED", "PEWED"),
        ("PEMED", "PEMED"),
        ("SPECIAL PROJECTS (PARTNERSHIP)","PARTNERSHIP"),

    ]
    status = models.CharField(
        choices=status_choice, max_length=100, default="PRESIDENTIAL PITCH", null=True, blank=True)

    class Meta:
        """Meta definition for Project."""

        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        ordering = ["id"]

    def __str__(self) -> str:
        """Unicode representation of Project."""
        return self.project_name

    # @property
    # def get_region_count(self):
    #     gift = []
    #     for i in self.REGION_CHOICES:
    #         gift.append({i[0]: Project.objects.all().filter(region=i[0]).count()})
    #     return gift

class Report(models.Model):
    project_name = models.ForeignKey(
        "Project", related_name="reports", null=True, blank=True, on_delete=models.CASCADE)
    date_update = models.DateField(blank=True, default=timezone.now)

    number_of_employees = models.IntegerField(null=True, blank=True)
    revenue = models.DecimalField(
        max_digits=15, default=0, decimal_places=2, null=True, blank=True)
    profit = models.DecimalField(
        max_digits=15, default=0, decimal_places=2, null=True, blank=True)

    class Meta:
        verbose_name = 'Report'
        verbose_name_plural = 'Reports'

    def __str__(self) -> str:
        return (("{}--{}").format(str(self.project_name), str(self.date_update)))

# class ProjectAnnotation(models.Model):
