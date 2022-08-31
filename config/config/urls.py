
from django.contrib import admin
from django.urls import path, include
from my_user.models import Person
from my_user.serializers import PersonSerializer
from project.models import Project
from project.serializers import ProjectSerializer
from rest_framework import routers, serializers, viewsets
from django.conf.urls.static import static
from django.conf import settings

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonSerializer
        fields = "__all__"


class UserViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer



router = routers.DefaultRouter()

router.register(r"user", UserViewSet)

# print(router.urls)
urlpatterns = [
    path('admin/', admin.site.urls),
    path("api-auth", include("rest_framework.urls", namespace="rest_framework")),
    path("api/", include("project.urls")),
    path('', include(router.urls)),
    path('avatar/', include('avatar.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
