from django.urls import path
from rest_framework import urlpatterns
from rest_framework.urlpatterns import format_suffix_patterns
from project import views


urlpatterns = [
    path("projects/", views.ProjectList.as_view()),
    path("projects/<int:pk>", views.ProjectDetail.as_view()),
]

urlpatterns += format_suffix_patterns(urlpatterns)
