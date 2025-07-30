from django.contrib import admin
from .models import Categoria, Genero, Producto, Tallas


class ProductoAdmin (admin.ModelAdmin):
    list_display = ('nombre','precio','stock','activo','talla', 'categoria','genero')

# Register your models here.

admin.site.register(Categoria)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Genero)
admin.site.register(Tallas)