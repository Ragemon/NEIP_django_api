from rest_framework import permissions

class IsOwnOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        print(obj, request)
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.founders_name == request.my_user.models.Person
