from django.urls import path
from . import views

urlpatterns = [
    path('getAll/', views.getBlogs),
    path('get/<int:pk>/', views.getBlog),
    path('post/', views.postBlog),
    path('put/<int:pk>/', views.putBlog),
    path('delete/<int:pk>/', views.deleteBlog),
    path('comment/<int:pk>/', views.comment),
]
