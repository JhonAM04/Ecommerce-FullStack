from django.shortcuts import render
from .serializers import RegistroSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@api_view(['POST'])
def registro_view(request):
    serializer = RegistroSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message':'Usuario creado Existosamente'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def enviar_correo(request):
    asunto = "Recuperación de contraseña"
    mensaje = "Hola, haz clic en este enlace para recuperar tu contraseña: https://midominio.com/reset-password"
    destinatario = request.data.get('correo')  # correo que recibes desde el front
    remitente = 'Jhonalvarezfs.0110@gmail.com'

    if not destinatario:
        return Response({"error": "Correo requerido"}, status=400)
    elif not User.objects.filter(email=destinatario).exists():
        return Response({'error': 'Este correo no está registrado.'}, status=status.HTTP_404_NOT_FOUND)

    try:
        send_mail(
            asunto,
            mensaje,
            remitente,
            [destinatario],
            fail_silently=False
        )
        return Response({"mensaje": "Correo enviado con éxito"})
    except Exception as e:
        return Response({"error": str(e)}, status=500)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def obtener_perfil(request):
    usuario = request.user
    data = {
        'id': usuario.id,
        'nombre': usuario.first_name,
        'apellido': usuario.last_name,
        'email': usuario.email,
        'username': usuario.username,
    }
    return Response(data)
