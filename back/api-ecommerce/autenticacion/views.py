from django.shortcuts import render
from .serializers import RegistroSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['POST'])
def registro_view(request):
    serializer = RegistroSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message':'Usuario creado Existosamente'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)