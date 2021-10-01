from django.contrib import admin
from django.urls import path, include
from .views import   RegisterAPI,LoginAPIView, UserAPIView
from django.urls import path
from knox.views import LogoutView
#from knox import views as knox_views
#from .views import LoginAPI

urlpatterns = [
    path('', include('knox.urls')),
    path('user', UserAPIView.as_view()),
    path('register', RegisterAPI.as_view(), name='register'),
    path('login', LoginAPIView.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='knox_logout')
   # path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
   # path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]