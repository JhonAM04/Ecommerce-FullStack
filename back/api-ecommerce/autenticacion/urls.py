from rest_framework_simplejwt.views import (
    TokenObtainPairView
)
from django.urls import path
from autenticacion import views

urlpatterns = [
    path('ecommerce/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('ecommerce/register', views.registro_view),
    path('ecommerce/forgottenPassword', views.enviar_correo),
]