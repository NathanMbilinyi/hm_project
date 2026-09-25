from rest_framework import viewsets, permissions
from .models import Article
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    """Public, read-only list of published news articles."""

    serializer_class = ArticleSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ["is_breaking", "category__slug"]

    def get_queryset(self):
        return Article.objects.filter(is_published=True).select_related("category")

    def get_serializer_context(self):
        return {"request": self.request}
