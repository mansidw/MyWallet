from django.http import request
from django.shortcuts import render

# Create your views here.
from django.contrib.auth import login
from knox.views import LoginView
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken, User
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, FileResponse

#Dishita Added
class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
##################################
# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1],
        })


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
            "id": UserSerializer(user, context=self.get_serializer_context()).data.get('id')
        })

def changedetails(request):
    if(request.method=='PUT'):
        user_data = JSONParser().parse(request)
        medicines=User.objects.get(medicineId=user_data['id'])
        medicines_serializer = UserSerializer(data=user_data)
        if medicines_serializer.is_valid():
            medicines_serializer.save()
            return JsonResponse("Updated Successfully!!",safe=False)
        return JsonResponse("Failed to Update.",safe=False)