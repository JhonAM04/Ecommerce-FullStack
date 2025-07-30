from django.db import models
from django.contrib.auth.models import User
from inventario.models import Producto

# Create your models here.

class Pedidos (models.Model):
    usuario = models.ForeignKey(User, on_delete=models.RESTRICT, related_name='pedidos')
    fecha = models.DateTimeField(auto_now_add=True)
    total = models.FloatField(default=0)

class PedidoDetalle (models.Model):
    pedido = models.ForeignKey(Pedidos, on_delete=models.CASCADE, related_name='detalles')
    producto = models.ForeignKey(Producto, on_delete=models.RESTRICT)
    cantidad = models.PositiveIntegerField()
    precioUnitario = models.FloatField()
    subtotal = models.FloatField()

    def save(self, *args, **kwargs):
        self.subtotal = self.precioUnitario * self.cantidad
        super().save(*args,**kwargs)

