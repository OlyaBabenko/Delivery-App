from django.middleware.csrf import get_token
from rest_framework import status, viewsets
from rest_framework.decorators import api_view, action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *


class RestaurantView(APIView):
    permission_classes = [AllowAny]

    @staticmethod
    def get(request):
        restaurant = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurant, many=True)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)


class ProductCreateView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        name = request.GET.get('name')
        restaurant = Restaurant.objects.get(name=name)
        dishes = Product.objects.filter(restaurant=restaurant)
        serializer = ProductsSerializer(dishes, many=True)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    # def create(self, request, *args, **kwargs):
    #     order_data = request.data.copy()
    #     items_data = order_data.pop('items', [])
    #
    #     order_serializer = self.get_serializer(data=order_data)
    #     order_serializer.is_valid(raise_exception=True)
    #     order = order_serializer.save()
    #
    #     item_serializer = OrderItemSerializer(data=items_data, many=True)
    #     item_serializer.is_valid(raise_exception=True)
    #     items = item_serializer.save(order=order)
    #
    #     response_data = order_serializer.data
    #     response_data['items'] = OrderItemSerializer(items, many=True).data
    #
    #     return Response(response_data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def take_token(request):
    csrf_token = get_token(request)
    return Response({'csrfToken': csrf_token})
