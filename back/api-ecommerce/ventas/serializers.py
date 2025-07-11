from rest_framework import serializers
from .models import Pedidos, PedidoDetalle

class PedidoDetalleSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidoDetalle
        fields = ['producto','cantidad','precioUnitario','subtotal']
    
class PedidosSerializer(serializers.ModelSerializer):
    detalles = PedidoDetalleSerializer(many=True)
    class Meta:
        model = Pedidos
        fields = ['id','usuario','fecha','total','detalles']
        read_only_fields = ['usuario','fecha','total']
    
    def create(self, validated_data):
        detalle_Pedido = validated_data.pop('detalles')
        pedido = Pedidos.objects.create(**validated_data)
        total = 0
        for detalle in detalle_Pedido:
            PedidoDetalle.objects.create(pedido=pedido, **detalle)
            total += detalle['precioUnitario']*detalle['cantidad']
        pedido.total = total
        pedido.save()
        return pedido