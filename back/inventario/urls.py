from django.urls import path
from inventario import views

urlpatterns = [
    path('ecommerce/categorias', views.CategoriaListView.as_view()),
    path('ecommerce/generos', views.GeneroListView.as_view()),
    path('ecommerce/tallas', views.TallasListView.as_view()),
    path('ecommerce/productos', views.ProductosListView.as_view()),
    path('ecommerce/productos/<int:pk>', views.ProductoDetailView.as_view())

]