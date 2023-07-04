from rest_framework.generics import RetrieveUpdateAPIView
from .models import UserProfile
from .serializers import UserProfileSerializer


class UserProfileView(RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()
    lookup_field = "user_id"
