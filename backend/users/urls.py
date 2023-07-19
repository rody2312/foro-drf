from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view()),
    path('register/', views.register),
    path('put/', views.putUser),
    path('uploadImage/', views.putUser),
    path('userProfile/', views.getUserProfile),
    path('user/<int:pk>/', views.getUser),
    path('users/', views.getUsers),
]
