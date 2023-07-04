from django.contrib.auth import get_user_model
from django.db import transaction
from rest_framework import viewsets

from accounts.models import UserProfile
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

    def perform_create(self, serializer):
        with transaction.atomic():
            user = serializer.save()
            UserProfile.objects.create(user=user)
