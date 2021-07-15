from django import urls
from django.conf.urls import url
from django.http import HttpRequest, HttpResponse
from django.urls import path

from . import views

urlpatterns = [
    path('', views.store, name="store"),
    path('cart/', views.cart, name="cart"),
    path('checkout/', views.checkout, name="checkout"),
    path('admin/', views.admin, name="admin"),
    path('search/', views.search, name="search"),
    path('detail/', views.detail, name="detail"),
    path('update_item/', views.updateItem, name="update_item"),
    path('process_order/', views.processOrder, name="process_order"),
    # path("checkout/paytm_handle/", views.paytmHandle, name="paytm_handle"),

]
