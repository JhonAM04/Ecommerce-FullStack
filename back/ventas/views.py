from django.shortcuts import render
from .serializers import PedidosSerializer
from .models import Pedidos
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class PedidosView(APIView):

    def get(self, request):
        user = request.user
        pedidos = Pedidos.objects.filter(usuario=user)
        serializer = PedidosSerializer(pedidos, many=True)
        return Response (serializer.data)

    def post(self,request):
        serializer = PedidosSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(usuario=request.user)
            return Response({'message':'Pedido creado Exitosamente'}, status=status.HTTP_201_CREATED) 
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PedidosListView(generics.ListAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
