from django.shortcuts import render
import json
from userauth.models import User
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from numpy.lib.function_base import median
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, FileResponse
import io
from random import randrange
from rooms.serializers import RoomSerializer, TransactionSerializer
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from expensetracker.settings import EMAIL_HOST_USER
from django.core.mail import EmailMessage
from rooms.models import User,room,room_members,transaction,debt,final_transactions
from django.shortcuts import render,redirect,get_object_or_404
# Create your views here.

'''Display all the rooms in which user is a member.
Filter objects from room_members model.'''

@csrf_exempt
def room_list(request):
    if request.method=='GET':
        rooms = room_members.objects.filter(member=request.user)
        rooms_list = [x.room for x in rooms]
        length = False
        if(len(rooms_list) == 0):
            length = True
        print(len(rooms_list))
        roomlist_serializer = RoomSerializer(rooms, many=True)
        return JsonResponse({"roomlist":roomlist_serializer.data,"length":length},safe=False)

"""
Display all the details of the room.
Room name, Creator, number of members, All the transaction made in the room.
"""
@csrf_exempt
def room_details(request,pk):
    rooms = get_object_or_404(room,pk=pk)
    creator = False
    if request.user == rooms.creater:
        creator = True
    members = room_members.objects.filter(room=rooms)
    members_list = [x.member for x in members]
    members_count = len(members_list)
    transactions = transaction.objects.filter(room=rooms)
    roomdet_serializer = RoomSerializer(rooms, many=True)
    members_serializer = RoomSerializer(members, many=True)
    transaction_serializer = TransactionSerializer(transactions, many=True)
    return JsonResponse({"room_details":roomdet_serializer.data,
                        "members":members_serializer.data,
                        "members_list":members_list,
                        'transactions':transaction_serializer,
                        'members_count':members_count,
                        'creator':creator},safe=False)
    '''return render(request,'splitter/room_detail.html',{'rooms':rooms,
                                                        'members_list':members_list,
                                                        'transactions':transactions,
                                                        'members_count':members_count,
                                                        'creator':creator})'''