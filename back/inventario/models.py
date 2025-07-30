from django.db import models

# Create your models here.

class Genero (models.Model):
    
    descripcion = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f'genero: {self.descripcion}'

class Tallas (models.Model):

    descripcion = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f'Talla: {self.descripcion}'

class Categoria (models.Model):

    descripcion = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return f'Categoria: {self.descripcion}'

class Producto (models.Model):

    Estados_Lista = (
        ('A','Activo'),
        ('I','Inactivo')
    )

    nombre = models.CharField(max_length=150)
    precio = models.FloatField(default=0)
    stock = models.IntegerField()
    activo = models.CharField(max_length=1, choices=Estados_Lista)
    imagen = models.URLField(blank=True,null=True)
    talla = models.ForeignKey(Tallas, on_delete=models.RESTRICT)
    categoria = models.ForeignKey(Categoria, on_delete=models.RESTRICT)
    genero = models.ForeignKey(Genero, on_delete=models.RESTRICT)

    def __str__(self):
        return f'{self.nombre}'

