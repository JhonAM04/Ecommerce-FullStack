from rest_framework.urls import path
from ventas import views


urlpatterns = [
    path('ecommerce/pedidosUsuario', views.PedidosView.as_view()),
    path('ecommerce/pedidos', views.PedidosListView.as_view()),
]

