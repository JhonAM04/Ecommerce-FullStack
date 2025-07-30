window.onload = function(){
    const $ = django.jQuery;
    $('.inline-related select').change(function(){
        const productoID = this.value;
        const inputName = this.id;
        const inputPrecio = inputName.replace('-producto','-precioUnitario');
        if(productoID){
            $.get(`http://127.0.0.1:8000/api/ecommerce/productos/${productoID}`, function(data){
            $('#'+inputPrecio).val(data.precio)
        })
        }else{
            $('#'+inputPrecio).val('')
        }
    })
}