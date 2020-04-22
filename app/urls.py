from django.conf.urls import url
from django.contrib import admin
from . import views
from django.urls import path, re_path



urlpatterns = [
    path('',views.index),
    path('cita',views.calendar),
]