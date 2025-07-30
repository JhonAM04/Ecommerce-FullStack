from django.contrib import admin
from .models import Pedidos, PedidoDetalle


class PedidoDetalleInline(admin.TabularInline):
    model = PedidoDetalle
    extra = 1
    fields = ['producto','cantidad','precioUnitario','subtotal']
    readonly_fields = ['subtotal']

    class Media:
        js = ('admin/js/Precio_producto_autofill.js',)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.select_related('producto')

class PedidosAdmin(admin.ModelAdmin):
    list_display=('usuario','fecha','total')
    readonly_fields = ['total']
    inlines= [PedidoDetalleInline]

    def save_formset(self, request, form, formset, change):
        pedido = form.instance
        total_precio = 0.0
        for inline_form in formset.cleaned_data:
            cantidad = inline_form.get('cantidad', 0)
            precio = inline_form.get('precioUnitario', 0)
            total_precio += cantidad * precio
        pedido.total = total_precio
        pedido.save() # Guardamos el pedido
        formset.save() # Guardamos el detalle



# Register your models here.

admin.site.register(Pedidos, PedidosAdmin)



