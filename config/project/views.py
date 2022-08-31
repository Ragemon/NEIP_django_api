from django.shortcuts import render
from rest_framework.serializers import Serializer
from project.models import Project
from project.serializers import ProjectSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from django.db.models import Count

# Create your views here.


class ProjectList(generics.ListCreateAPIView):

    # def get(self, request, format=None):
    #     print(request)
    #     projects = Project.objects.all()
    #     serializer = ProjectSerializer(projects, many=True)

        

    #     return Response(serializer.data)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
   
    

    def get_queryset(self):
        
        return Project.objects.annotate(
            total_projects=Count("project_name"),
            total_beneficiaries=Count("founders_name", distinct=True))
    



    # def post(self, request, format=None):
    #     serializer = ProjectSerializer(data=request.data)
    #     if serializer.is_valid():
    #         Serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)


class ProjectDetail(APIView):
    def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)

        except Project.DoesNotExist:
            return Http404

    def get(self, request, pk, format=None):
        print(request)
        project = self.get_object(pk)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        project = self.get_object(pk)
        serializer = ProjectSerializer(project, data=request)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        project = self.get_object(pk)
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
