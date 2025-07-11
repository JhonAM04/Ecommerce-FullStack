from django.shortcuts import render
from .serializers import CategoriaSerializer, GeneroSerializer, TallasSerializer, ProductosSerializer
from .models import Categoria, Genero, Tallas, Producto
from rest_framework import generics

# Create your views here.

class CategoriaListView(generics.ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class GeneroListView(generics.ListAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer

class TallasListView(generics.ListAPIView):
    queryset = Tallas.objects.all()
    serializer_class = TallasSerializer

class ProductosListView(generics.ListAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductosSerializer

class ProductoDetailView(generics.RetrieveAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductosSerializer