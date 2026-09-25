from rest_framework import viewsets, permissions
from .models import Category, Program
from .serializers import CategorySerializer, ProgramSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """Public, read-only. Categories are managed from Django Admin."""

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]


class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    """Public, read-only list of published programmes.

    Supports ?is_featured=true and ?category__slug=habari style filtering
    via django-filter, so the frontend never has to hard-code programmes.
    """

    serializer_class = ProgramSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ["is_featured", "category__slug"]

    def get_queryset(self):
        return Program.objects.filter(is_published=True).select_related("category")

    def get_serializer_context(self):
        return {"request": self.request}
