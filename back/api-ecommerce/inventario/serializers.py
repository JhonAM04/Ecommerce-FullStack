from rest_framework import serializers
from .models import Categoria, Genero, Tallas, Producto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = '__all__'

class TallasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tallas
        fields = '__all__'

class ProductosSerializer(serializers.ModelSerializer):
    genero = serializers.SlugRelatedField(read_only=True, slug_field='descripcion')
    talla = serializers.SlugRelatedField(read_only=True, slug_field='descripcion')
    categoria = serializers.SlugRelatedField(read_only=True, slug_field='descripcion')
    class Meta:
        model = Producto
        fields = '__all__'