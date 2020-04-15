from django.shortcuts import render
from django.core.paginator import Paginator
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse, HttpRequest, HttpResponseRedirect
import sweetify
# Create your views here.
def index(request):
    return render(request,'index.html')