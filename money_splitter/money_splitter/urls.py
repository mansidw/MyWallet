
from django.contrib import admin
from django.urls import path,include
from splitter import views
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('',views.HomePage,name = "home"),
    path('admin123/', admin.site.urls),
    path('accounts/',include('allauth.urls')),
    path('splitter/',include('splitter.urls')),
    path('expenses/',include('expenses.urls')),
    #path('income/',include('income.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)