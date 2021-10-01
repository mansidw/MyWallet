from rest_framework import exceptions, serializers
#from django.contrib.auth.models import User
from .models import room, transaction
from django.contrib.auth import authenticate
# User Serializer
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = room
        fields = ('creator', 'name','members')

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = transaction
        fields = ('room','amount', 'reason','created','payer','splitters')