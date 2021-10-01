from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from numpy.lib.function_base import median
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, FileResponse
from PIL import Image
import io

# Create your views here.
@csrf_exempt
def prescriptionApi(request):
    
    if request.method=='POST':
        #prescription_data=JSONParser().parse(request)
        image = Image.open(io.BytesIO(request.FILES['file'].read()))
        
